from fastapi import FastAPI
from src.routes.contato import router as contato_router

app = FastAPI()

app.include_router(contato_router)
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)