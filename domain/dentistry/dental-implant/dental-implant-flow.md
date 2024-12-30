# Dental Implant Surgery

## Flow

- **Healing Before Implants**: A patient must complete any necessary restorative treatments (e.g., fillings or root canals) on a tooth before being considered for a dental implant in that area to ensure the implant has a healthy foundation.
  - Fillings
  - Root Canals
  - Crown Placement
  - Periodontal Treatment
  - Bone Grafting
  - Extraction of Compromised Teeth
  - Scaling and Root Planing
  - Sinus Lift (if needed)
  - Treatment for Gum Disease
  - Orthodontic Treatment (if misalignment affects implant placement)

```mermaid
sequenceDiagram
    participant Patient
    participant Dentist
    participant Specialist
    participant Lab
    participant Insurance

    Patient->>Dentist: Schedule initial consultation
    Dentist->>Patient: Conduct examination and diagnosis
    Dentist->>Patient: Recommend necessary restorative treatments
    
    alt Restorative Treatments Needed
        Dentist->>Patient: Schedule fillings appointment
        Patient->>Dentist: Complete fillings
        Dentist->>Lab: Send for crown fabrication
        Lab-->>Dentist: Return completed crown
        
        Dentist->>Patient: Schedule root canal appointment
        Patient->>Dentist: Complete root canal
        
        Dentist->>Patient: Refer to periodontist if gum disease present
        periodontist->>Patient: Conduct periodontal treatment
        
        alt Bone Grafting Needed
            Dentist->>Patient: Schedule bone grafting procedure
            Patient->>Dentist: Complete bone grafting
            Dentist->>Patient: Schedule follow-up for healing assessment
        end
        
        Dentist->>Patient: Confirm readiness for implant placement
    end

    Dentist->>Specialist: Refer for implant placement consultation
    Specialist->>Patient: Evaluate and schedule implant surgery
    
    Patient->>Specialist: Undergo implant surgery
    Specialist->>Lab: Order custom implant components
    
    Lab-->>Specialist: Provide custom implant components
    Specialist->>Patient: Place dental implant
    
    Specialist->>Insurance: Submit claim for procedure
    Insurance-->>Specialist: Process claim and provide reimbursement
    
    Specialist->>Patient: Schedule follow-up appointments for healing assessment

```

### Explanation of the Flow

1. **Initial Consultation**: The patient schedules an initial consultation with the dentist.
2. **Diagnosis**: The dentist conducts an examination and recommends necessary restorative treatments.
3. **Restorative Treatments**:
   - Fillings and crowns are addressed first.
   - Root canals are performed if needed.
   - Periodontal treatment is referred if gum disease is present.
   - Bone grafting is scheduled if required.
4. **Implant Placement**:
   - The dentist refers the patient to a specialist for implant placement.
   - The specialist evaluates the patient and schedules the surgery.
5. **Surgery**: The patient undergoes the implant surgery, after which custom components are ordered from the lab.
6. **Insurance Processing**: Claims are submitted to insurance for reimbursement.
7. **Follow-Up**: Follow-up appointments are scheduled to monitor healing.
