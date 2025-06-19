'use client'

import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function MenuItem({ icon, children }: MenuItemProps) {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 bg-white/20 text-white text-[13px] rounded-xl px-2 py-2.5 shrink-0"
    >
      {icon}
      {children}
    </Link>
  );
}