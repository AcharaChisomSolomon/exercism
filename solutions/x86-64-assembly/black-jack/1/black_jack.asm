C2 equ 2
C3 equ 3
C4 equ 4
C5 equ 5
C6 equ 6
C7 equ 7
C8 equ 8
C9 equ 9
C10 equ 10
CJ equ 11
CQ equ 12
CK equ 13
CA equ 14

TRUE equ 1
FALSE equ 0

section .text

global value_of_card
value_of_card:
    cmp rdi, 14
    je .is_fourteen
    cmp rdi, 10
    jg .is_greater

    mov rax, rdi
    ret

.is_fourteen:
    mov rax, 1
    ret
    
.is_greater:
    mov rax, 10
    ret

global higher_card
higher_card:
    call value_of_card
    mov r10, rax

    mov rdx, rdi
    mov rdi, rsi
    call value_of_card
    
    cmp r10, rax
    je .is_equal
    jl .is_smaller

    mov rax, rdx
    mov rdx, 0
    ret

.is_equal:
    mov rax, rdx
    mov rdx, rsi
    ret
    
.is_smaller:
    mov rax, rsi
    mov rdx, 0
    ret

global value_of_ace
value_of_ace: 
    cmp rdi, CA
    je .is_one
    call value_of_card
    mov r10, rax

    cmp rsi, CA
    je .is_one
    mov rdi, rsi
    call value_of_card
    add rax, r10

    add rax, 11
    cmp rax, 21
    jg .is_one

    mov rax, 11
    ret

.is_one:
    mov rax, 1
    ret

global is_blackjack
is_blackjack:
    call value_of_card
    mov rdx, rax

    mov rdi, rsi
    call value_of_card

    cmp rdx, 1
    je .check_for_10
    cmp rdx, 10
    je .check_for_1

    jmp .is_false
    
.check_for_10:
    cmp rax, 10
    je .is_true
    jmp .is_false

.check_for_1:
    cmp rax, 1
    je .is_true
    jmp .is_false

.is_true:
    mov rax, 1
    ret

.is_false:
    mov rax, 0
    ret

global can_split_pairs
can_split_pairs:
    call value_of_card
    mov rdx, rax

    mov rdi, rsi
    call value_of_card

    cmp rax, rdx
    je .is_true
    jmp .is_false

.is_false:
    mov rax, 0
    ret

.is_true:
    mov rax, 1
    ret

global can_double_down
can_double_down:
    call value_of_card
    mov rdx, rax

    mov rdi, rsi
    call value_of_card

    add rax, rdx
    cmp rax, 9
    jge .check_upper_limit
    jmp .is_false

.check_upper_limit:
    cmp rax, 11
    jle .is_true
    jmp .is_false

.is_true:
    mov rax, 1
    ret

.is_false:
    mov rax, 0
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif

























