import * as React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

interface RightSidebarProps {
    open: boolean;
}

export function RightSidebar({ open }: RightSidebarProps) {
    return (
        <Collapsible.Content
            className={`
        flex-shrink-0 bg-white dark:bg-gray-800 border-l
        transition-width duration-200 ease-linear
        ${open ? 'w-80' : 'w-0'}
      `}
        >
            {open && (
                <div className="p-4 h-full overflow-auto">
                    <h2 className="text-xl font-semibold mb-4">特定信息</h2>
                    {/* 在这里放你需要展示的详情组件 */}
                    <p>这里可以显示项目进度、日志或其他操作面板。</p>
                </div>
            )}
        </Collapsible.Content>
    );
}
