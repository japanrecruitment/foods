import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const languageNames = {
    jp: '🇯🇵 日本語',
    en: '🇺🇸 English'
};

export const LanguageSwitcher = () => {
    const router = useRouter();

    const handleLocaleChange = (newLocale) => {
        router.push(router.pathname, router.asPath, {
            locale: newLocale
        });
    };

    return (
        <div className="mr-1 md:mr-0 text-right z-10">
            <Menu as="div" className="group relative inline-block text-left">
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button
                                className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary-blue ${
                                    open ? 'bg-opacity-100' : 'bg-opacity-75'
                                } group-hover:bg-opacity-100 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                                {languageNames[router.locale]}
                                <ChevronDownIcon
                                    className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                static
                                className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-0 ring-transparent ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 space-y-1">
                                    {router.locales.map((locale, index) => {
                                        const active =
                                            router.locale === locale
                                                ? true
                                                : false;
                                        return (
                                            <Menu.Item key={index.toString()}>
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            handleLocaleChange(
                                                                locale
                                                            )
                                                        }
                                                        className={`${
                                                            active
                                                                ? 'bg-primary-blue text-white'
                                                                : 'text-gray-700 hover:bg-blue-100'
                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                        {languageNames[locale]}
                                                    </button>
                                                </>
                                            </Menu.Item>
                                        );
                                    })}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
};
