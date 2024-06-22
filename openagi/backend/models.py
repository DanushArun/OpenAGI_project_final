from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class LLM(Base):
    __tablename__ = 'llms'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)

class Agent(Base):
    __tablename__ = 'agents'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    llm_id = Column(Integer, ForeignKey('llms.id'))
    llm = relationship('LLM')
