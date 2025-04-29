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

const testimonialPriorityOrder = ['Resend', 'Forward', 'Headset'];

export function getSortedTestimonials(items: Testimonial[]): Testimonial[] {
    const priorityMap = new Map<string, Testimonial>();
    const others: Testimonial[] = [];

    for (const item of items) {
        const matchKey = testimonialPriorityOrder.find((kw) =>
            item.name.includes(kw)
        );
        if (matchKey) {
            if (!priorityMap.has(matchKey)) {
                priorityMap.set(matchKey, item);
            }
        } else {
            others.push(item);
        }
    }

    const prioritized = testimonialPriorityOrder
        .map((kw) => priorityMap.get(kw))
        .filter((t): t is Testimonial => Boolean(t));

    return [...prioritized, ...others];
}
