default rel


PRIVATE_KEY equ 0b1011_0011_0011_1100


section .text

global extract_higher_bits
extract_higher_bits:
    mov rax, rdi
    shr rax, 8
    ret

global extract_lower_bits
extract_lower_bits:
    xor rax, rax
    mov al, dil
    ret

global extract_redundant_bits
extract_redundant_bits:
    call extract_higher_bits
    and  al, dil
    ret

global set_message_bits
set_message_bits:
    call extract_higher_bits
    or   al, dil
    ret

global rotate_private_key
rotate_private_key:
    call   extract_redundant_bits
    popcnt rcx, rax

    mov     r11w, PRIVATE_KEY
    rol     r11w, cl
    mov     ax, r11w
    ret

global format_private_key
format_private_key:
    call rotate_private_key
    
    mov  rdi, rax
    call extract_lower_bits
    mov  r11, rax

    call extract_higher_bits

    xor  al, r11b
    not  al
    ret

global decrypt_message
decrypt_message:
    push rdi
    call format_private_key    
    mov  r11b, al

    pop  rdi
    call set_message_bits

    shl  r11w, 8
    mov  r11b, al
    mov  ax, r11w
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
