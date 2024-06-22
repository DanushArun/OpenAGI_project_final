from fastapi import FastAPI
from databases import Database
from routers import components, workflows

app = FastAPI()

# Database setup
database = Database("postgresql://user:password@localhost/openagi_db")

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

# Include routers
app.include_router(components.router)
app.include_router(workflows.router)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

