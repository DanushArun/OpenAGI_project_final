from pydantic import BaseModel

class LLMBase(BaseModel):
    name: str
    description: str

class LLMCreate(LLMBase):
    pass

class LLM(LLMBase):
    id: int

    class Config:
        orm_mode = True
