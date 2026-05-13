#include "atbash_cipher.h"

namespace atbash_cipher {

    std::string plain{"abcdefghijklmnopqrstuvwxyz"};
    std::string cipher{"zyxwvutsrqponmlkjihgfedcba"};

    std::string encode(std::string text) {
        std::string message{""};
        
        int text_len = text.size();
        int i{0};
        int space_count{0};
        while (i < text_len) {
            int message_len = message.size();
            if ((message_len - space_count) % 5 == 0 
                && message_len > 0
                && message[message_len - 1] != ' ') {
                message = message + " ";
                space_count++;
            }
            
            if (std::isalnum(text[i])) {
                if (std::isalpha(text[i])) {
                    int cipher_id = plain.find(std::tolower(text[i]));
                    message = message + cipher[cipher_id];
                } else {
                    message = message + text[i];
                }
            }
            i++;
        }

        if (message[message.size() - 1] == ' ') {
            message = message.substr(0, message.size() - 1);
        }

        return message;
    }
    
    std::string decode(std::string code) {
        std::string original{""};

        int i{0};
        int code_len = code.size();

        while (i < code_len) {
            if (code[i] != ' ') {
                if (std::isalpha(code[i])) {
                    int plain_id = cipher.find(code[i]);
                    original = original + plain[plain_id];
                } else {
                    original = original + code[i];
                }
            }
            i++;
        }

        return original;
    }

}
