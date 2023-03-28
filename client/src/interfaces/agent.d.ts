import { BaseKey } from '@pankod/refine-core';

export interface AgentCardProp {
    id?: BaseKey | undefined,
    name: string,
    email: string,
    avatar: string,
    numOfProperties: number
}

export interface InfoBarProps {
    icon: ReactNode,
    name: string
}
