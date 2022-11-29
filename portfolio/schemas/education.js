export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        {
            name: "schoolName",
            title: "SchoolName",
            type: "string",
        },
        {
            name: "logo",
            title: "Logo",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "dateStarted",
            title: "DateStarted",
            type: "date",
        },
        {
            name: "dateEnded",
            title: "DateEnded",
            type: "date",
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],
        },
    ],
    orderings: [
        {
            title: "dateEnded",
            name: "dateEnded",
            by: [{ field: "dateEnded", direction: "desc" }],
        },
    ],
};
