import React from 'react';
import { Section } from '../../Section';
import { SectionHeading } from '../../SectionHeading';

export const About = () => {
    return (
        <Section id="company">
            <SectionHeading titleKey={'about'} subtitleKey={null} />
            <div className="about-container">
                <table className="table w-full">
                    <tbody>
                        <tr className="bg-white">
                            <td className="border px-2 md:px-8 py-2 w-1/3 md:w-1/4">
                                社名
                            </td>
                            <td className="border px-4 py-2">
                                ジャパンリクルートメントグループ株式会社
                                <br />
                                Japan Recruitment Group Co., Ltd.
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-2 md:px-8 py-2">所在地</td>
                            <td className="border px-4 py-2">
                                [本社]
                                <br />
                                〒110-0016 東京都台東区台東2-11-7
                                <br />
                                TEL: 03-5846-8757
                                <br />
                                FAX: 03-5846-8758
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border px-2 md:px-8 py-2">設立</td>
                            <td className="border px-4 py-2">2017年12月</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-2 md:px-8 py-2">資本金</td>
                            <td className="border px-4 py-2">2,000万円</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border px-2 md:px-8 py-2">代表者</td>
                            <td className="border px-4 py-2">
                                代表取締役　野上貴裕
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-2 md:px-8 py-2">役員</td>
                            <td className="border px-4 py-2">
                                副社長　タパスダン (Thapa Sudan)
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border px-2 md:px-8 py-2">
                                事業内容
                            </td>
                            <td className="border px-4 py-2">
                                <div>● 人材ビジネス事業</div>
                                <div className="md:ml-2">
                                    ・人材派遣:労働者派遣事業許可番号(派13-307530)
                                    <br />
                                    ・人材紹介:有料職業紹介事業許可番号(13-ユー308387)
                                    <br />
                                    ・特定技能:特定技能登録支援機関番号(20登ー003489)
                                </div>
                                <div>● 教育事業</div>
                                <div className="md:ml-2">
                                    ・特定技能試験対策
                                    <br />
                                    ・留学生支援セミナー等
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
