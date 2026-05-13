namespace hellmath {

    enum class AccountStatus {
        troll,
        guest,
        user,
        mod
    };
    
    enum class Action {
        read,
        write,
        remove
    };
    
    bool display_post(AccountStatus poster, AccountStatus viewer) {
        if (poster == AccountStatus::troll && viewer != AccountStatus::troll) {
            return false;
        }
        return true;
    }
    
    bool permission_check(Action action, AccountStatus actor) {
        switch (actor) {
            case AccountStatus::guest:
                return action == Action::read;
            case AccountStatus::troll:
            case AccountStatus::user:
                return action == Action::read || action == Action::write;
            case AccountStatus::mod:
                return true;
            default:
                return false;
        }
    }
    
    bool valid_player_combination(AccountStatus player1, AccountStatus player2) {
        if (player1 == AccountStatus::guest || player2 == AccountStatus::guest) {
            return false;
        }
        if (player1 == AccountStatus::troll && player2 == AccountStatus::troll) {
            return true;
        }
        if (player1 != AccountStatus::troll && player2 != AccountStatus::troll) {
            return true;
        }
        return false;
    }
    
    bool has_priority(AccountStatus player1, AccountStatus player2) {
        return static_cast<int>(player1) > static_cast<int>(player2);
    }

}
