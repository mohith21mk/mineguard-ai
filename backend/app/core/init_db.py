import logging
from app.core.database import engine, Base, SessionLocal
from app.models.user import User
from app.models.business import BusinessProfile
from app.services.auth_service import AuthService

logger = logging.getLogger("mineguard.init_db")

DEMO_USER_EMAIL = "minemanager@mineguard.in"
DEMO_USER_PASSWORD = "Safety2026!"
DEMO_USER_NAME = "Mine Manager"
DEMO_USER_PHONE = "+91 98765 43210"


def init_db():
    """
    Ensures all database tables exist and seeds the default demo Mine Manager user
    with an active coal mining lease profile if not already present.
    Uses production PBKDF2-HMAC-SHA256 password hashing.
    """
    # 1. Ensure all SQLAlchemy tables are created
    Base.metadata.create_all(bind=engine)

    # 2. Check and seed demo user
    db = SessionLocal()
    try:
        user = AuthService.get_user_by_email(db, DEMO_USER_EMAIL)
        if not user:
            logger.info(f"Seeding default demo user: {DEMO_USER_EMAIL}")
            user = User(
                email=DEMO_USER_EMAIL.lower().strip(),
                hashed_password=AuthService.hash_password(DEMO_USER_PASSWORD),
                full_name=DEMO_USER_NAME,
                phone_number=DEMO_USER_PHONE,
                is_active=True,
            )
            db.add(user)
            db.commit()
            db.refresh(user)
            logger.info(f"Default demo user created with ID: {user.id}")

        # 3. Ensure an active mine site profile exists for this user
        profile = (
            db.query(BusinessProfile)
            .filter(BusinessProfile.user_id == user.id)
            .first()
        )
        if not profile:
            logger.info(f"Seeding default mine profile for user: {user.email}")
            profile = BusinessProfile(
                user_id=user.id,
                business_name="North Karanpura Coal Block 04",
                business_type="Public Sector Undertaking / CIL Joint Venture",
                industry="Coal Mining & Mineral Extraction",
                sector="Opencast Coal Mining (OCP)",
                established_date="2019-01-12",
                company_size="Major Mining Lease (3.5 MTPA)",
                employee_count=1250,
                annual_turnover="₹480.0 Crore",
                registered_address="North Karanpura Coalfield, Sector IV, Barkagaon Block",
                city="Ranchi",
                state="Jharkhand",
                country="India",
                postal_code="834001",
                primary_activity="Opencast Coal Extraction & Heavy Blasting",
                secondary_activities="Coal Handling Plant (CHP), Rake Loading, Land Reclamation",
                manufacturing_activity=True,
                import_activities=False,
                export_activities=False,
                environmental_impact="Critical",
                operating_status="Active",
                has_gst=True,
                has_msme_registration=True,
                has_udyam_registration=True,
                cin="U10100JH2019GOI012345",
                pan="AAACR1234F",
                gstin="20AAACR1234F1Z5",
                udyam_number="DGMS-EZ-RNC-CMR-1049",
                onboarding_completed=True,
                business_category="factory",
            )
            db.add(profile)
            db.commit()
            db.refresh(profile)
            logger.info(f"Default mine profile created with ID: {profile.id}")

    finally:
        db.close()


if __name__ == "__main__":
    init_db()
    print("Database initialization and demo user seeding completed successfully.")
