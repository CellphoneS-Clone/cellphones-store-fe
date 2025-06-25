'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '../icons/BannerMenuIcon';

export interface MenuItem {
  icon: React.ReactNode;
  links: { href: string; text: string }[];
  isMultiple: boolean;
}

interface MenuBannerProps {
  menuItems: MenuItem[];
  isOverlay?: boolean;
  onClose?: () => void;
}

export function MenuBanner({ menuItems, isOverlay = false, onClose }: MenuBannerProps) {
  return (
    <div
      className={`${
        isOverlay
          ? 'fixed inset-0 bg-black/50 z-50'
          : ''
      }`}
      onClick={isOverlay ? onClose : undefined}
    >
      <div
        className={`${
          isOverlay ? 'w-[225px] max-w-[1200px] px-4 ml-65 pt-[8px] mt-16' : ' md:block w-[225px] h-full'
        } rounded-2xl shadow-[0_1px_2px_0_rgba(60,64,67,0.1),0_2px_6px_2px_rgba(60,64,67,0.15)] overflow-hidden bg-white`}
        onClick={(e) => isOverlay && e.stopPropagation()}
      >
        <div className="menu-wrapper overflow-y-auto scrollbar-none p-2">
          <div className="menu-tree w-full rounded-lg p-0">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="label-menu-tree px-2 py-0.5 group hover:scale-105 hover:opacity-70 rounded-md relative"
              >
                <Link
                    href={item.links[0].href}
                    className="label-item flex items-center justify-between min-h-[31.3px] cursor-pointer text-gray-800 no-underline"
                    onClick={onClose}
                  >
                    <div className="right-content flex items-center gap-2">
                      {item.icon}
                      <span className="single-link text-sm font-medium">{item.links[0].text}</span>
                    </div>
                    <div className="icon-right w-[7.5px]">
                      <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                  </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}