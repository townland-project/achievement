import { RenderComponent } from '@townland-project/dom'
import { AchievementComponent } from './components/achievement'

export async function Achievement(achievement: Achievement): Promise<HTMLElement> {
    return RenderComponent(AchievementComponent, {
        Attributes: {
            'title': achievement.title
        },
        Styles: {
            '--image': `url("${achievement.url}")`,
            '--background': achievement.background,
            '--border': achievement.border
        }
    })
}

interface Achievement {
    title: string
    url: string
    background?: string
    border?: string
}