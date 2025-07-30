interface Testimonial {
    id: string;
    logo: any;
    name: string;
    text: string;
    author?: {
        name: string;
        role: string;
        avatar: any;
    };
    relatedSuccessStory?: {
        slug: string;
    };
}

const testimonialPriorityOrder = [
    'Resend',
    //'Forward',
    'Headset',
];

export function getSortedTestimonials(
    testimonials: Testimonial[]
): Testimonial[] {
    const testimonialByPriority = new Map<string, Testimonial>();
    const nonPriorityTestimonials: Testimonial[] = [];

    for (const testimonial of testimonials) {
        const priorityKeyword = testimonialPriorityOrder.find((keyword) =>
            testimonial.name.includes(keyword)
        );

        if (priorityKeyword) {
            if (!testimonialByPriority.has(priorityKeyword)) {
                testimonialByPriority.set(priorityKeyword, testimonial);
            }
        } else {
            nonPriorityTestimonials.push(testimonial);
        }
    }

    const prioritizedTestimonials = testimonialPriorityOrder
        .map((keyword) => testimonialByPriority.get(keyword))
        .filter((t): t is Testimonial => Boolean(t));

    return [...prioritizedTestimonials, ...nonPriorityTestimonials];
}
