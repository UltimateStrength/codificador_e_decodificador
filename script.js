// Função para traduzir o texto com base na opção selecionada
function translateText() {
    const translationType = document.getElementById('translationType').value;
    const operationType = document.getElementById('operationType').value;
    const textInput = document.getElementById('textInput').value;
    const textOutput = document.getElementById('textOutput');
    
    let result = '';
    
    if (operationType === 'encode') {
      result = encodeText(translationType, textInput);
    } else if (operationType === 'decode') {
      result = decodeText(translationType, textInput);
    } else {
      result = 'Opção de operação inválida.';
    }
    
    textOutput.textContent = result;
  }
  
  // Função para codificar o texto com base no tipo de tradução selecionado
  function encodeText(translationType, input) {
    let result = '';
    
    switch (translationType) {
      case 'binary':
        result = encodeBinary(input);
        break;
      case 'morse':
        result = encodeMorse(input);
        break;
      case 'ascii':
        result = encodeASCII(input);
        break;
      case 'hex':
        result = encodeHex(input);
        break;
      default:
        result = 'Opção de tradução inválida.';
    }
    
    return result;
  }
  
  // Função para decodificar o texto com base no tipo de tradução selecionado
  function decodeText(translationType, input) {
    let result = '';
    
    switch (translationType) {
      case 'binary':
        result = decodeBinary(input);
        break;
      case 'morse':
        result = decodeMorse(input);
        break;
      case 'ascii':
        result = decodeASCII(input);
        break;
      case 'hex':
        result = decodeHex(input);
        break;
      default:
        result = 'Opção de tradução inválida.';
    }
    
    return result;
  }
  
  // Funções de codificação
  
  function encodeBinary(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      const binary = charCode.toString(2);
      result += binary.padStart(8, '0') + ' ';
    }
    return result.trim();
  }
  
  const asciiToMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
  };
  
  const morseToAscii = Object.fromEntries(
    Object.entries(asciiToMorse).map(([key, value]) => [value, key])
  );
  
  function encodeMorse(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i).toUpperCase();
      if (asciiToMorse.hasOwnProperty(char)) {
        result += asciiToMorse[char] + ' ';
      } else if (char === ' ') {
        result += '/ ';
      }
    }
    return result.trim();
  }
  
  function decodeMorse(input) {
    const morseArray = input.split(' ');
    let result = '';
    for (let i = 0; i < morseArray.length; i++) {
      const morse = morseArray[i];
      if (morseToAscii.hasOwnProperty(morse)) {
        result += morseToAscii[morse];
      } else if (morse === '/') {
        result += ' ';
      }
    }
    return result;
  }  
  
  function encodeASCII(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      result += charCode.toString() + ' ';
    }
    return result.trim();
  }
  
  function encodeHex(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      const hex = charCode.toString(16).toUpperCase();
      result += hex + ' ';
    }
    return result.trim();
  }
  
  // Funções de decodificação
  
  function decodeBinary(input) {
    const binaryArray = input.split(' ');
    let result = '';
    for (let i = 0; i < binaryArray.length; i++) {
      const binary = binaryArray[i];
      const decimal = parseInt(binary, 2);
      result += String.fromCharCode(decimal);
    }
    return result;
  }
  
  function decodeMorse(input) {
    const morseCode = {
      '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
      '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
      '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
      '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
      '-.--': 'Y', '--..': 'Z'
    };
    
    let result = '';
    const morseArray = input.split(' ');
    for (let i = 0; i < morseArray.length; i++) {
      const code = morseArray[i];
      if (morseCode.hasOwnProperty(code)) {
        result += morseCode[code];
      } else if (code === '') {
        result += ' ';
      }
    }
    return result;
  }
  
  function decodeASCII(input) {
    const asciiArray = input.split(' ');
    let result = '';
    for (let i = 0; i < asciiArray.length; i++) {
      const decimal = parseInt(asciiArray[i]);
      result += String.fromCharCode(decimal);
    }
    return result;
  }
  
  function decodeHex(input) {
    const hexArray = input.split(' ');
    let result = '';
    for (let i = 0; i < hexArray.length; i++) {
      const hex = hexArray[i];
      const decimal = parseInt(hex, 16);
      result += String.fromCharCode(decimal);
    }
    return result;
  }
  