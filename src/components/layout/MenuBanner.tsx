'use client'

import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '../icons/BannerMenuIcon';

interface MenuItem {
  icon: React.ReactNode;
  links: { href: string; text: string }[];
  isMultiple: boolean;
}

interface MenuBannerProps {
  menuItems: MenuItem[];
}

export function MenuBanner({ menuItems }: MenuBannerProps) {
  return (
    <div
      id="menu-main"
      className="hidden md:block w-[225px] h-full rounded-2xl shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)] overflow-hidden bg-white"
    >
      <div className="menu-wrapper h-full overflow-y-hidden scrollbar-none p-2">
        <div className="menu-tree min-h-[375px] w-[200px] rounded-lg p-0">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="label-menu-tree px-2 py-0.5 group hover:scale-105 hover:opacity-70 rounded-md relative"
            >
              {item.isMultiple ? (
                <div className="label-item flex items-center justify-between min-h-[31.3px] cursor-pointer">
                  <div className="right-content flex items-center">
                    {item.icon}
                    <div className="flex flex-wrap">
                      {item.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="multiple-link text-sm font-medium text-gray-800 line-clamp-1"
                        >
                          <span>{link.text}, </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="icon-right w-[7.5px]">
                    <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                </div>
              ) : (
                <Link
                  href={item.links[0].href}
                  className="label-item flex items-center justify-between min-h-[31.3px] cursor-pointer text-gray-800 no-underline"
                >
                  <div className="right-content flex items-center">
                    {item.icon}
                    <span className="single-link text-sm font-medium">{item.links[0].text}</span>
                  </div>
                  <div className="icon-right w-[7.5px]">
                    <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}