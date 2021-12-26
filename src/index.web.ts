import { Achievement } from "."


Achievement({
    title: 'Star',
    url: 'https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1640482499~hmac=81eb6440a8681bca114c4acd73e23a8a',
    border: '#f9ca24',
    background: '#f6e85d'
}).then(element => document.getElementById('root')?.appendChild(element))