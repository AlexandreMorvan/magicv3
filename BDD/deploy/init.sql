-- Deploy magic:init to pg
--  sqitch deploy db:pg:magic     
BEGIN;

CREATE TABLE cards(
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text NOT NULL,
    released_at text,
    image text,
    manacost text,
    cmc int, 
    type_line text,
    oracle_text text,
    colors text,
    set_id text,
    set text,
    set_name text,
    rarity text,
    flavor_text text 
);

CREATE TABLE sets(
    object text NOT NULL,
    id text NOT NULL,
    code text NOT NULL,
    name text NOT NULL,
    tcgplayer_id int,
    uri text NOT NULL,
    scryfall_uri text NOT NULL,
    search_uri text NOT NULL,
    released_at text NOT NULL,
    set_type text NOT NULL,
    card_count int NOT NULL,
    digital BOOLEAN,
    nonfoil_only BOOLEAN,
    foil_only BOOLEAN,
    block_code text,
    block text,
    icon_svg_uri text NOT NULL
);

COMMIT;
