PRIVATE_KEY equ 0b1011_0011_0011_1100

section .text

global extract_higher_bits
extract_higher_bits:
    shr di, 8
    mov al, dil
    ret

global extract_lower_bits
extract_lower_bits:
    mov al, dil
    ret

global extract_redundant_bits
extract_redundant_bits:
    ror di, 8
    mov al, dil
    rol di, 8
    and al, dil
    ret

global set_message_bits
set_message_bits:
    ror di, 8
    mov al, dil
    rol di, 8
    or al, dil
    ret

global rotate_private_key
rotate_private_key:
    call extract_redundant_bits
    mov ah, 0
    popcnt cx, ax
    mov ax, PRIVATE_KEY
    rol ax, cl
    ret

global format_private_key
format_private_key:
    call rotate_private_key
    
    mov di, ax
    call extract_lower_bits
    mov dl, al
    
    call extract_higher_bits

    xor al, dl
    not al
    ret

global decrypt_message
decrypt_message:
    push rdi
    
    call format_private_key
    mov dh, al

    pop rdi
    call set_message_bits
    mov dl, al

    mov ax, dx
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
