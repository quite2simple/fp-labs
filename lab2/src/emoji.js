export const emojiHTML = (code) => {
    return `&#${code};`;
}

export const defaultDictionary = {
    'kiss': 128536,
    'tired': 128555,
    'cry': 128557,
    'sleep': 128557,
    'like': 128077,
    'nails': 128133,
    'police': 128110,
    'dance': 128378,
    'santa': 127877,
    'alien': 128125,
    'bro': 128128,
    'eye': 128064,
    'pc': 128187,
    'folder': 128193,
    'up': 128200,
    'down': 128201,
    'pin': 128204,
    'book': 128218,
    'phone': 128241,
    'golf': 9971,
    'america': 128509,
    'home': 127968,
    'bank': 127974,
}

export const defaultIfEmpty = 128293;

export const textToRandomEmojiCode = (text, dict, ifEmpty) => {
    if (text === '') {
        return ifEmpty;
    }
    const emojiOptions = [];
    for (const word in dict) {
        if (text.includes(word)) {
            emojiOptions.push(dict[word]);
        }
    }
    if (emojiOptions.length === 0) {
        return ifEmpty;
    }
    return emojiOptions[Math.floor(Math.random() * emojiOptions.length)];
}
