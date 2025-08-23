# 📋 How to Update the Careers Page

This guide explains how to easily update job openings and other content on the Careers page.

## 🚀 Quick Updates

### Method 1: Edit the Data File (Recommended for Non-Technical Users)

The easiest way to update job openings is by editing the JSON data file:

**File Location:** `/client/public/data/careers.json`

#### To Add a New Job Opening:

1. Open `/client/public/data/careers.json`
2. Copy an existing job object
3. Update the fields:
   ```json
   {
     "id": 6,
     "title": "Your Job Title",
     "department": "Department Name",
     "location": "City, Country / Remote",
     "type": "Full-time",
     "experience": "X-Y years",
     "salary": "$XX,XXX - $XX,XXX",
     "description": "Job description here",
     "requirements": [
       "Requirement 1",
       "Requirement 2",
       "Requirement 3"
     ],
     "benefits": ["Benefit 1", "Benefit 2"],
     "isActive": true
   }
   ```
4. Save the file

#### To Remove a Job Opening:

- Change `"isActive": true` to `"isActive": false`
- Or delete the entire job object

#### To Update Company Benefits:

Edit the `companyBenefits` section in the same file.

### Method 2: Edit the React Component (For Developers)

**File Location:** `/client/src/pages/careers.tsx`

Look for the "🔧 EASY UPDATE SECTION" comments in the file:

```typescript
// 🔧 EASY UPDATE SECTION - Update job openings here
const jobOpenings = [
  // Add or modify jobs here
];

// 🔧 EASY UPDATE SECTION - Update company benefits here
const companyBenefits = [
  // Add or modify benefits here
];

// 🔧 EASY UPDATE SECTION - Update company values here
const companyValues = [
  // Add or modify values here
];
```

## 📝 Common Updates

### Adding a New Job Department

1. Add the job with the new department name
2. The department will automatically appear as a badge

### Updating Salary Ranges

- Use format: `"$XX,XXX - $XX,XXX"` for USD
- Use format: `"£XX,XXX - £XX,XXX"` for GBP
- Use format: `"CAD $XX,XXX - $XX,XXX"` for CAD

### Updating Job Locations

Common formats:
- `"Remote"`
- `"City, Country"`
- `"City, Country / Remote"`
- `"Multiple Locations"`

### Changing Application Process

To change where "Apply Now" buttons link:
1. Find the button in `/client/src/pages/careers.tsx`
2. Update the `href` in the Link component:
   ```tsx
   <Link href="/contact">  {/* Change this URL */}
   ```

## 🔄 Advanced Updates

### Adding Application Tracking

To integrate with job boards or ATS systems:

1. Replace the "Apply Now" button with external links:
   ```tsx
   <Button asChild>
     <a href="https://your-ats-system.com/job/123" target="_blank">
       Apply on JobBoard
     </a>
   </Button>
   ```

### Adding Job Categories/Filters

1. Add category field to job objects:
   ```json
   {
     "category": "Engineering",
     // ... other fields
   }
   ```

2. Add filter logic to the component

### Displaying "No Openings" Message

Uncomment the "No Current Openings" section in the careers component when there are no active jobs.

## 📊 Content Guidelines

### Job Titles
- Use clear, standard industry titles
- Avoid internal jargon or code names

### Job Descriptions
- Keep to 1-2 sentences
- Focus on impact and purpose
- Use active voice

### Requirements
- List 3-5 key requirements
- Start with experience level
- Include technical skills
- Mention soft skills

### Benefits
- Use short, clear benefit names
- Focus on unique offerings
- Keep list concise (3-5 items)

## 🛠️ Technical Details

### File Structure
```
client/
├── src/pages/careers.tsx          # Main careers page component
├── public/data/careers.json       # Job data (optional future enhancement)
└── README-CAREERS.md              # This file
```

### Dependencies
- React + TypeScript
- Framer Motion (animations)
- Lucide React (icons)
- Tailwind CSS (styling)

### Responsive Design
The page is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔍 SEO Considerations

When adding jobs:
- Use descriptive job titles
- Include location information
- Add relevant keywords naturally
- Keep descriptions informative

## 📞 Support

For technical assistance:
- Contact the development team
- Create an issue in the repository
- Check the main project README

## 🚀 Publishing Changes

After making updates:
1. Test locally with `npm run dev`
2. Commit changes to version control
3. Deploy to production environment

---

*Last updated: August 2025*
