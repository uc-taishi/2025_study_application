CREATE TABLE public.courses (
    course_code      text        PRIMARY KEY,          -- コースコード
    course_name            text        UNIQUE NOT NULL,      -- コース名称
    description        text        ,             -- 内容
    created_at       timestamptz NOT NULL DEFAULT now() -- 作成日
);
