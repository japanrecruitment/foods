import React from 'react';
import { Section } from '../../Section';
import { SectionHeading } from '../../SectionHeading';
import useTranslation from 'next-translate/useTranslation';

export const About = () => {
    const { t } = useTranslation('common');
    return (
        <Section id="company">
            <SectionHeading titleKey={'about'} subtitleKey={null} />
            <div className="about-container">
                <table className="table w-full">
                    <tbody>
                        <tr className="bg-white">
                            <td className="border px-2 md:px-8 py-2 w-1/3 md:w-1/4">
                                {t('about-company.name')}
                            </td>
                            <td className="border px-4 py-2">
                                {t('about-company.name-value')}
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-2 md:px-8 py-2">
                                {t('about-company.address')}
                            </td>
                            <td className="border px-4 py-2">
                                [{t('about-company.head-office')}]
                                <br />
                                {t('about-company.address-value')}
                                <br />
                                TEL: 03-5846-8757
                                <br />
                                FAX: 03-5846-8758
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border px-2 md:px-8 py-2">
                                {t('about-company.established')}
                            </td>
                            <td className="border px-4 py-2">
                                {t('about-company.established-value')}
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-2 md:px-8 py-2">
                                {t('about-company.capital')}
                            </td>
                            <td className="border px-4 py-2">
                                {t('about-company.capital-value')}
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border px-2 md:px-8 py-2">
                                {t('about-company.representative')}
                            </td>
                            <td className="border px-4 py-2">
                                {t('about-company.ceo')}　
                                {t('about-company.ceo-name')}
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-2 md:px-8 py-2">
                                {t('about-company.board-member')}
                            </td>
                            <td className="border px-4 py-2">
                                {t('about-company.vp')}　
                                {t('about-company.vp-name')}
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border px-2 md:px-8 py-2">
                                {t('about-company.business-contents')}
                            </td>
                            <td className="border px-4 py-2">
                                <div>● 人材ビジネス事業</div>
                                <div className="md:ml-6">
                                    ●
                                    人材派遣:労働者派遣事業許可番号(派13-307530)
                                    <br />
                                    ●
                                    人材紹介:有料職業紹介事業許可番号(13-ユー308387)
                                    <br />●
                                    特定技能:特定技能登録支援機関番号(20登ー003489)
                                </div>
                                <div>● 教育事業</div>
                                <div className="md:ml-6">
                                    ● 特定技能試験対策
                                    <br />● 留学生支援セミナー等
                                </div>
                                <div>● 外国人ビザ申請更新手続きサポート</div>
                                <div>● 不動産仲介サポート</div>
                                <div>● 携帯電話取次</div>
                                <div>● その他</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Section>
    );
};
