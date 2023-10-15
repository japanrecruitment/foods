import { IconName } from '../components';

export type ProductItem = {
    title: string;
    country: string;
    description: string;
    image: string;
};

export type WhyChooseUsItem = {
    title: string;
    description: string;
    icon: IconName;
};

export type BlobItem = {
    title: string;
    subtitle: string;
    description: string;
    icon: IconName;
};

export const products_en: ProductItem[] = [
    {
        title: 'Chicken',
        description:
            'The chicken we handle is plump and juicy. This is proof of our commitment to quality. Taste the difference in every bite.',
        image: 'images/brazil-chicken.jpg',
        country: 'Chicken'
    },
    {
        title: 'Cashew Nuts',
        description:
            'Premium cashew nuts. Enjoy the healthy flavor and rich taste as is! If you use it as an ingredient, it will complement any dish!',
        image: 'images/cachew-nuts.jpg',
        country: 'Vietnam'
    },
    {
        title: 'Charcoal',
        description:
            'Check out the "clogged sound" of our charcoal. This is proof that the burning time is maintained for a long time. It is useful in various scenes such as BBQ and grilled dishes.',
        image: 'images/charcol.jpg',
        country: 'Indonesia'
    },
    {
        title: 'Lamb and Mutton',
        description:
            'Enjoy the unique flavor of lamb and mutton. It is truly a blessing of nature. The richness is also exceptional.',
        image: 'images/australian-lamb.jpg',
        country: 'Australia'
    },
    {
        title: 'Canola Oil',
        description:
            'Canola oil is said to be good for the body. If you want to take it to the next level, try our canola oil.',
        image: 'images/canola-oil.jpg',
        country: 'Australia'
    },
    {
        title: 'Honey',
        description:
            'Truly a "natural panacea". Of course, deliciousness is guaranteed. We carry a variety of flavors.',
        image: 'images/honey.jpg',
        country: 'Nepal'
    },
    {
        title: 'Shilajit',
        description:
            'Shilajit is said to be effective for diabetes and blood sugar levels. Please check out the power of Himalayan products.',
        image: 'images/shilajeet.jpg',
        country: 'Nepal'
    },
    {
        title: 'Tomato (whole)',
        description:
            'Our signature whole tomatoes are sweet and sour. It will serve as a complement to any dish.',
        image: 'images/tomato.jpg',
        country: 'Italy'
    }
];
export const products_ja: ProductItem[] = [
    {
        title: 'チキン',
        description:
            '私たちが取り扱う鶏肉はふっくら、ジューシー。品質へのこだわりの証です。一口ごとに違いを味わってください。',
        image: 'images/brazil-chicken.jpg',
        country: 'ブラジル等'
    },
    {
        title: 'カシューナッツ',
        description:
            'プレミアムカシューナッツ。健康的な風味と豊かな味わいはそのままでも！食材としてお使いならばあらゆる料理を引き立たせます！',
        image: 'images/cachew-nuts.jpg',
        country: 'ベトナム等'
    },
    {
        title: '炭',
        description:
            '当社の炭の「詰まった音」をお確かめください。それは燃焼時間が長く保たれる証し。BBQ やグリル料理等、様々なシーンで重宝いたします。',
        image: 'images/charcol.jpg',
        country: 'インドネシア等'
    },
    {
        title: 'ラム・マトン',
        description:
            'ラム・マトンの「独特の風味」をお楽しみください。それはまさに「大自然の恵み」。濃厚さも格別です。',
        image: 'images/australian-lamb.jpg',
        country: 'オーストラリア等'
    },
    {
        title: 'キャノーラ',
        description:
            '身体にに良いとされるキャノーラ油。もうワンランクアップさせるなら私たちのキャノーラ油を是非ご賞味ください。',
        image: 'images/canola-oil.jpg',
        country: 'オーストラリア等'
    },
    {
        title: 'はちみつ',
        description:
            'まさに「自然の万能薬」。もちろん美味しさも保証付き。様々な風味のものを取り扱っております。',
        image: 'images/honey.jpg',
        country: 'ネパール等'
    },
    {
        title: 'シラジット',
        description:
            '糖尿病や血糖値に効果があるとされるシラジット。その中でも「ヒマラヤ産」のパワーをお確かめください。',
        image: 'images/shilajeet.jpg',
        country: 'ネパール等'
    },
    {
        title: 'トマト（ホール）',
        description:
            '甘くて、酸味のある私たち自慢のホールトマト。あらゆる料理の引き立たせ役となるでしょう。',
        image: 'images/tomato.jpg',
        country: 'イタリア等'
    }
];

export const whyChooseUs_en: WhyChooseUsItem[] = [
    {
        title: 'Quality Assurance',
        description:
            'As a food business, the most important thing is the safety and security of our customers. To achieve this, we not only have to meet various standards, but we also do not allow any compromise with the manufacturer.',
        icon: 'CheckBadgeIcon'
    },
    {
        title: 'Global Network',
        description:
            'We provide a variety of services, including food and human resources, and we guarantee seamless import and export, born from our special network between Japan and overseas, and promise to provide carefully selected ingredients.',
        icon: 'GlobeAsiaAustraliaIcon'
    },
    {
        title: 'Passion for Food',
        description:
            'Our passion for food is directed towards your commitment to food. Your satisfaction fuels our passion.',
        icon: 'HeartIcon'
    }
    // {
    //     title: 'Sustainability',
    //     description:
    //         "We're committed to ethical sourcing and sustainable practices, ensuring that you savor not only great taste but also a clear conscience.",
    //     icon: 'ArrowPathIcon'
    // }
];

export const whyChooseUs_ja: WhyChooseUsItem[] = [
    {
        title: '品質保証',
        description:
            '食を扱う事業者として、最も大事なのはお客様の「安心」「安全」です。そのためには様々な基準を満たすことはもちろんの事、メーカーに対しても一切の妥協を許しません。',
        icon: 'CheckBadgeIcon'
    },
    {
        title: 'グローバルネットワーク',
        description:
            '食材を問わず、人材など、様々サービス展開する私たちは、日本と海外との特別なネットワークから生まれる、シームレスな輸出入を保証し、厳選された食材のご提供をお約束します。',
        icon: 'GlobeAsiaAustraliaIcon'
    },
    {
        title: '食への情熱',
        description:
            '私たちの食への情熱の方向性は皆様の食へのこだわりに向けられています。みなさんの満足が私たちのさらなる情熱を駆り立てます。',
        icon: 'HeartIcon'
    }
    // {
    //     title: '持続可能性',
    //     description:
    //         '私たちは倫理的な調達と持続可能な実践に尽力し、素晴らしい味だけでなく明確な良心を味わっていただけるよう努めています。',
    //     icon: 'ArrowPathIcon'
    // }
];

export const blobs_en: BlobItem[] = [
    {
        icon: 'BarsArrowDownIcon',
        title: 'Import',
        subtitle: 'Bringing the World to Your Table',
        description:
            'Discover our passion for importing the finest global culinary treasures. We bridge borders to deliver exceptional flavors right to your plate.'
    },
    {
        icon: 'BarsArrowUpIcon',
        title: 'Export',
        subtitle: 'Sharing Culinary Excellence Worldwide',
        description:
            "We're dedicated to exporting top-quality food products worldwide. Our commitment knows no boundaries as we share our culinary excellence."
    },
    {
        icon: 'ArrowsPointingOutIcon',
        title: 'Distribution',
        subtitle: 'Connecting Through Food',
        description:
            'Beyond imports and exports, we connect the world through premium food products, including our special connection to Japan. Join us in a global culinary experience.'
    }
];

export const blobs_ja: BlobItem[] = [
    {
        icon: 'BarsArrowDownIcon',
        title: '輸入',
        subtitle: '世界を食卓へ',
        description:
            '世界の最高級グルメの宝物を輸入するという私たちの情熱をご覧ください。 私たちは国境を越えて、卓越した味わいをあなたのお皿に届けます。'
    },
    {
        icon: 'BarsArrowUpIcon',
        title: '輸出',
        subtitle: '卓越した料理を世界中に共有',
        description:
            '当社は最高品質の食品を世界中に輸出することに専念しています。 私たちの卓越した料理を共有するため、私たちの取り組みには境界がありません。'
    },
    {
        icon: 'ArrowsPointingOutIcon',
        title: '分布',
        subtitle: '食を通じてつながる',
        description:
            '輸出入を超えて、私たちは日本との特別なつながりを含め、プレミアム食品を通じて世界を結びつけます。 世界的な料理体験にぜひご参加ください。'
    }
];
