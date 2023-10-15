import React, { ChangeEvent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import axios from 'axios';
import { Section } from '../../Section';
import { SectionHeading } from '../../SectionHeading';

type ContactFormData = {
    companyName: string;
    name: string;
    email: string;
    phone: string;
    message: string;
};

type UserMessage = {
    type: 'error' | 'message';
    message: string;
};

const defaultData = {
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: ''
};

export const Cta = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Record<string, string>>({});
    const [data, setData] = useState<ContactFormData>(defaultData);
    const [message, setMessage] = useState<UserMessage | null>(null);

    const { t } = useTranslation('common');

    const handleDataChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.currentTarget;
        setData(
            (current) =>
                ({
                    ...current,
                    [name]: value
                } as ContactFormData)
        );
    };

    const addError = (name, value) => {
        setError((current) => ({ ...current, [name]: value }));
    };

    const renderError = (name: string) => {
        if (error[name]) {
            return (
                <div className="form-input-error">
                    {t(`contact-form.error.${error[name]}`)}
                </div>
            );
        }
        return null;
    };

    const handleFormSubmit = () => {
        // run validation
        const { companyName, name, email, phone, message } = data;

        let _hasError = false;
        setError({});
        setMessage(null);

        if (!companyName || companyName.trim() === '') {
            addError('companyName', 'isRequired');
            _hasError = true;
        }

        if (!name || name.trim() === '') {
            addError('name', 'isRequired');
            _hasError = true;
        }

        if (!email || email.trim() === '') {
            addError('email', 'isRequired');
            _hasError = true;
        }

        if (!phone || phone.trim() === '') {
            addError('phone', 'isRequired');
            _hasError = true;
        }

        if (!message || message.trim() === '') {
            addError('message', 'isRequired');
            _hasError = true;
        }

        if (!_hasError) {
            sendMessage();
        }
    };

    const sendMessage = async () => {
        setLoading(true);
        // send message
        try {
            const { data: result, status } = await axios.post(
                '/api/send-message',
                data
            );
            if (status === 200) {
                setMessage({ type: 'message', message: 'success' });
            } else {
                setMessage({ type: 'error', message: 'something-went-wrong' });
            }
            setData(defaultData);
        } catch (error) {
            setMessage({ type: 'error', message: 'something-went-wrong' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section id="cta">
            <SectionHeading titleKey={'contact'} subtitleKey={null} />
            <div id="contact-form">
                {message && (
                    <div
                        className={`user-message user-message-${message.type}`}>
                        {t(`contact-form.user-message-${message.message}`)}
                    </div>
                )}
                <div>
                    <label htmlFor="companyName">
                        {t('contact-form.company-name')}
                        <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        onChange={handleDataChange}
                        disabled={loading}
                        value={data.companyName}
                    />
                    {renderError('companyName')}
                </div>
                <div>
                    <label htmlFor="name">
                        {t('contact-form.name')}
                        <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleDataChange}
                        disabled={loading}
                        value={data.name}
                    />
                    {renderError('name')}
                </div>
                <div>
                    <label htmlFor="email">
                        {t('contact-form.email')}
                        <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleDataChange}
                        disabled={loading}
                        value={data.email}
                    />
                    {renderError('email')}
                </div>
                <div>
                    <label htmlFor="phone">
                        {t('contact-form.phone')}
                        <span>*</span>
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={handleDataChange}
                        disabled={loading}
                        value={data.phone}
                    />
                    {renderError('phone')}
                </div>
                <div>
                    <label htmlFor="message ">
                        {t('contact-form.message')}
                        <span>*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={handleDataChange}
                        disabled={loading}
                        value={data.message}
                    />
                    {renderError('message')}
                </div>
                <div className="text-center">
                    <button
                        id="submit-button"
                        onClick={handleFormSubmit}
                        disabled={loading}>
                        {t('contact-form.send')}
                    </button>
                </div>
            </div>
        </Section>
    );
};
