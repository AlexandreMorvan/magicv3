-- Revert magic:init from pg
-- sqitch revert db:pg:magic 
BEGIN;

DROP TABLE IF EXISTS cards, sets;

COMMIT;
