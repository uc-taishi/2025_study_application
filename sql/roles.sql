CREATE TABLE public.roles (
    role_code      text        PRIMARY KEY,          
    role_name            text      NOT NULL,    
    description        text        , 
    created_at       timestamptz NOT NULL DEFAULT now()
);
