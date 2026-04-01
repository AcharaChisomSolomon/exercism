default rel


C2    equ 2
C3    equ 3
C4    equ 4
C5    equ 5
C6    equ 6
C7    equ 7
C8    equ 8
C9    equ 9
C10   equ 10
CJ    equ 11
CQ    equ 12
CK    equ 13
CA    equ 14

TRUE  equ 1
FALSE equ 0


section .text

global value_of_card
value_of_card:
    cmp rdi, CA
    je  .is_ace
    
    cmp rdi, C10
    jae .is_letter

    mov rax, rdi
    jmp .end
.is_ace:
    mov rax, 1
    jmp .end
.is_letter:
    mov rax, 10
.end:
    ret

global higher_card
higher_card:
    mov  r11, rdi
    
    call value_of_card
    mov  r10, rax

    mov  rdi, rsi
    call value_of_card

    mov  rdi, r11
    xor  rdx, rdx

    cmp  r10, rax
    jg   .first_greater
    jl   .second_greater

    mov  rdx, rsi
    mov  rax, rdi
    jmp  .end
.first_greater:
    mov  rax, rdi
    jmp  .end
.second_greater:
    mov  rax, rsi
.end:
    ret

global value_of_ace
value_of_ace:
    cmp  rdi, CA
    je   .is_one
    call value_of_card
    mov  r11, rax

    cmp  rsi, CA
    je   .is_one
    mov  rdi, rsi
    call value_of_card

    add  rax, r11
    add  rax, 11
    cmp  rax, 21
    jg   .is_one

    mov rax, 11
    jmp .end
.is_one:
    mov rax, 1
.end:
    ret

global is_blackjack
is_blackjack:
    call value_of_card
    mov  r11, rax

    mov  rdi, rsi
    call value_of_card

    add  rax, r11
    cmp  rax, 11
    je   .is_potential_blackjack

    mov  rax, FALSE
    jmp  .end
.is_potential_blackjack:
    cmp  rsi, C10
    jge  .is_blackjack
    
    mov  rax, FALSE
    jmp  .end
.is_blackjack:
    mov  rax, TRUE
.end:
    ret

global can_split_pairs
can_split_pairs:
    call value_of_card
    mov  r11, rax

    mov  rdi, rsi
    call value_of_card

    cmp  r11, rax
    je   .can_split

    mov  rax, FALSE
    jmp  .end
.can_split:
    mov  rax, TRUE
.end:
    ret

global can_double_down
can_double_down:
    call value_of_card
    mov  r11, rax

    mov  rdi, rsi
    call value_of_card

    add  rax, r11
    cmp  rax, 9
    jge  .check_upper_limit

    mov  rax, FALSE
    jmp  .end
.check_upper_limit:
    cmp  rax, 11
    jle  .can_double_down

    mov  rax, FALSE
    jmp  .end
.can_double_down:
    mov  rax, TRUE
.end:
    ret

%ifidn __OUTPUT_FORMAT__,elf64
section .note.GNU-stack noalloc noexec nowrite progbits
%endif
