# MINEGUARD AI

> **"AI-Powered Smart Governance & Compliance Monitoring for Coal Mines"**  
> **Target**: Smart India Hackathon 2026 — Problem Statement SIH26024

---

## 📌 Overview

**MINEGUARD AI** is an intelligent, high-assurance digital governance, safety monitoring, and statutory compliance operating system engineered specifically for the coal mining industry in India.

Built on an enterprise-grade compliance architecture, MINEGUARD AI automates end-to-end regulatory adherence across:
- **DGMS (Directorate General of Mines Safety)** statutory mandates, Coal Mines Regulations (CMR 2017), and Mines Act 1952.
- **MoEFCC / SPCB** Environmental Clearances (EC), Forest Clearances (FC), and Consent to Operate (CTO).
- **CCO (Coal Controller Organization)** and Ministry of Coal production-evacuation tracking.
- **Safety Management Plans (SMP)**, hazardous gas monitoring, slope stability, and occupational health governance.

---

## 🏢 Target Governance Roles

MINEGUARD AI provides role-tailored dashboards and authorization workflows for:
1. **Mine Official** (Statutory Overman / Sirdar / In-Charge)
2. **Mine Manager** (First Class Mines Manager / Statutory Agent)
3. **Safety Officer** (Mine Safety & Accident Prevention Lead)
4. **Compliance Officer** (Statutory Filings & Clearance Governance)
5. **Environmental Officer** (EC/CTO, Water, Dust, Land Reclamation)
6. **Contractor Manager** (HEMM Fleet & Transport Vendor Compliance)
7. **Corporate Management** (Coal India / CIL Subsidiary Executive Leadership)
8. **Regulatory Authority** (DGMS / MoEFCC / SPCB / CCO Inspecting Officers)
9. **Field Inspection Team** (On-site audit and ground reality verification)

---

## ⚙️ Architecture & Tech Stack

### Frontend
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Lucide React Icons
- **State & Architecture**: In-memory tab-driven SPA with deterministic compliance rule engines

### Backend
- **Framework**: FastAPI (Python 3.11+)
- **Database**: SQLite / PostgreSQL with SQLAlchemy 2.0 & Alembic migrations
- **Document Intelligence**: PyPDF parsing, statutory certificate extraction, compliance vault
- **AI / RAG**: RAG-augmented compliance advisor referencing CMR 2017 and DGMS statutory circulars

---

## 🚀 Quick Start

### 1. Launch Everything with Unified Script
```powershell
.\run.ps1
```

### 2. Manual Frontend Setup
```bash
npm install
npm run dev
```

### 3. Manual Backend Setup
```bash
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

---

## 🔒 Security & Tenant Isolation

- Pure client-server separation with JWT authentication.
- Strict isolation of mine-site operational data, clearances, and audit logs.
- Immutable compliance action and inspection trail.
