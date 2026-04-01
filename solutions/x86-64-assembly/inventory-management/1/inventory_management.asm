default rel

WEIGHT_OF_EMPTY_BOX equ 500
TRUCK_HEIGHT equ 300
PAY_PER_BOX equ 5
PAY_PER_TRUCK_TRIP equ 220

section .text

global get_box_weight
get_box_weight:
    imul rdi, rsi
    imul rdx, rcx

    mov rax, WEIGHT_OF_EMPTY_BOX
    add rax, rdi
    add rax, rdx
    ret

global max_number_of_boxes
max_number_of_boxes:
    xor  rax, rax
    xor  rdx, rdx
    mov  rax, TRUCK_HEIGHT
    idiv rdi
    ret

global items_to_be_moved
items_to_be_moved:
    mov rax, rdi
    sub rax, rsi
    ret

global calculate_payment
calculate_payment:
    imul  rsi, PAY_PER_BOX
    imul  rdx, PAY_PER_TRUCK_TRIP
    imul  rcx, r8
    add   r9, 1

    mov   rax, rsi
    add   rax, rdx
    sub   rax, rcx
    sub   rax, rdi

    cqo
    idiv  r9

    add   rax, rdx
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
