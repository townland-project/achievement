import { Component, ComponentOnInit, RenderOnInit } from '@townland-project/dom'

@Component({
    id: 'tl-achievement',
    template: require('./component.htmlx'),
    style: require('./component.scssx')
})
export class AchievementComponent implements RenderOnInit, ComponentOnInit {
    ComponentOnInit(): void {
        this.InsertStar()
    }

    RenderOnInit(): void {

    }

    InsertStar(): void {
        if (document.getElementById('tl-achievement-star')) return;
        let svg = `
        <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                    <filter id="tl-achievement-star">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
        </svg>
        `

        document.body.innerHTML += svg
    }
}
