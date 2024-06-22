from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import LLM
from schemas import LLMCreate

router = APIRouter()

@router.post("/api/components", response_model=LLM)
def create_llm(llm: LLMCreate, db: Session = Depends(get_db)):
    db_llm = LLM(**llm.dict())
    db.add(db_llm)
    db.commit()
    db.refresh(db_llm)
    return db_llm

@router.get("/api/components", response_model=List[LLM])
def read_llms(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    llms = db.query(LLM).offset(skip).limit(limit).all()
    return llms
