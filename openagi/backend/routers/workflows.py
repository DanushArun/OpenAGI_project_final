from fastapi import APIRouter

router = APIRouter()

@router.get("/api/workflows")
def get_workflows():
    return {"message": "Workflows endpoint"}
