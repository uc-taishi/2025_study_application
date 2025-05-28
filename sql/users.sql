CREATE TABLE public.users (
    employee_no      text        PRIMARY KEY,          -- 社員番号
    email            text        UNIQUE NOT NULL,      -- メールアドレス
    name        text        NOT NULL,             -- 氏名
    password        text        NOT NULL,             -- パスワード
    role_code        text        NOT NULL,             -- 権限番号
    created_at       timestamptz NOT NULL DEFAULT now(),-- 作成日
    FOREIGN KEY (role_code) REFERENCES roles (role_code)
);
