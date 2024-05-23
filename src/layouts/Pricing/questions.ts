const frequentlyQuestions = [
    {
        title: 'How is my my bill calculated?',
        description: `There are two components to your monthly bill. Primarily, your bill is  calculated based on the amount of
        data that is Sourced, Transformed, and Delivered by Flow to your destinations. The activity of each of these
        ‘tasks’ are summed on a monthly basis. Secondarily, there is a charge of $0.14/hour per active connector.
        For a given connector running all month, this typically equates to about ~$100/month/connector. in a
        standard 720 hour month.   There is no storage fee as Estuary does not store your data, it will be hosted
        in your own cloud storage. In the free tier, you are given 10GB of data to move at no charge and up t
        o 2 connectors.`,
    },
    {
        title: 'Do you offer discounted rates?',
        description: `Discounts are based on two variables - volume commitments and contract duration.`,
    },
    {
        title: 'How does Pay-as-you-Go pricing work?',
        description: `For customers that are just starting out, or don’t want to commit to a specific volume of data or time
        you can use Estuary and pay for actual consumption on a monthly basis. Your bill will be computed
        at the end of each month based on the amount of data transfer and number of active connectors.
        Billing is done through Stripe, and you’ll be able to add a credit card.`,
    },
    {
        title: 'How does pre-pay work?',
        description: `Customers that want to pay for a fixed amount of data transfer can pay up front and then amortize
        that usage over time (no more than 12 months). The more data transfer paid up front, the greater the
        discount on the Pay-As-You-Go price.`,
    },
    {
        title: 'How does the Free Trial work?',
        description: `Flow can be used for free indefinitely. With the only gate being the 10GB of data transfer each month
        usage over 2 connectors. For customers on our Cloud Plan, there is a 30-day free trial upon request.`,
    },
    {
        title: 'What are my billing options?',
        description: `The free tier does not require a credit card nor any billing information. The Cloud Plan can be paid via
        credit card, debit card, or 30-day Invoice. The Enterprise tier is paid via invoice.`,
    },
    {
        title: 'Where is my data stored?',
        description:
            'In the free tier, your data will be stored securely stored in Estuary’s cloud storage. Estuary will only retain this data for a limited window. In the Cloud Plan and beyond, your data will be stored in your cloud bucket for whatever length you set.',
    },
];

export default frequentlyQuestions;
