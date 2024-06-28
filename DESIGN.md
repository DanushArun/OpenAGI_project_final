# OpenAGI Project Design Document

## Table of Contents

1. [Introduction](#introduction)
2. [High-Level Design (HLD)](#high-level-design-hld)
   - [System Overview](#system-overview)
   - [Architecture Diagram](#architecture-diagram)
   - [Components Description](#components-description)
3. [Low-Level Design (LLD)](#low-level-design-lld)
   - [Frontend](#frontend)
     - [Components](#frontend-components)
   - [Backend](#backend)
     - [Models](#backend-models)
     - [API Endpoints](#api-endpoints)
   - [Database](#database)
4. [Conclusion](#conclusion)

## Introduction

The OpenAGI project is a full-stack application designed to provide AI-powered components. The 
frontend is built using React, while the backend is powered by FastAPI. This document details the 
high-level and low-level designs of the project.

## High-Level Design (HLD)

### System Overview

The OpenAGI project consists of a frontend and a backend. The frontend interacts with users and 
sends requests to the backend, which processes these requests and interacts with the database.

### Architecture Diagram

openagi-project/
├── backend/
│ ├── init.py
│ ├── database.py
│ ├── main.py
│ ├── models.py
│ ├── routers/
│ │ ├── init.py
│ │ ├── components.py
│ ├── schemas.py
├── frontend/
│ ├── public/
│ │ ├── index.html
│ └── src/
│ ├── components/
│ │ ├── MainContent.js
│ ├── App.js
│ ├── index.js
│ ├── package.json
├── .gitignore
└── README.md

### Components Description

#### Frontend

- **React Components**: The user interface is built using React components. Each component 
represents a different part of the user interface.

#### Backend

- **FastAPI**: The backend is built using FastAPI, which handles API requests and responses.
- **Database**: The backend interacts with a relational database to store and retrieve data.

#### Database

- **SQLite**: The project uses SQLite as the database for simplicity and ease of setup.

## Low-Level Design (LLD)

### Frontend

#### Components

1. **App.js**
   - The main component that includes routing and layout.

2. **MainContent.js**
   - The core component that displays the main content of the application.

3. **Other Components**
   - Various other components that handle specific parts of the user interface.

**Example Code Snippet: App.js**

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainContent} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

Backend
Models
LLM

Represents a language model in the system.
Agent

Represents an agent that interacts with the language model.
Tool

Represents a tool used by the agents.
Stack

Represents a technology stack in the system.

Example Code Snippet: models.py
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

API Endpoints
GET /api/components

Fetch all components.
POST /api/components

Create a new component.
GET /api/components/{id}

Fetch a specific component by ID.
PUT /api/components/{id}

Update a specific component by ID.
DELETE /api/components/{id}

Delete a specific component by ID.

Example Code Snippet: routers/components.py

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



Database
Tables: The database consists of tables corresponding to the models defined in the backend.
llms: Stores language models.
agents: Stores agents associated with language models.
tools: Stores tools used by agents.
stacks: Stores technology stacks.

