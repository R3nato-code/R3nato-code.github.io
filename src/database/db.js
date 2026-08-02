const db = {
    perfil: {
        nomeCompleto: 'Renato da Silva Hipólito Mascarenhas',
        email: 'mascarenhasr02@gmail.com',
        linkedin: 'https://www.linkedin.com/in/renato',
        localizacao:'Ponta Grossa - PR',
        git: "github.com/Renato",
        numero: "(42) 99829-2718",
        objetivo:"Tenho como objetivo aumentar minhas habilidades e conhecimento de programção. Desenvolvendo projetos que solucionem problemas reais."
        
    },

    estadoAtual:{
        nivel:"Estudante",
        curso:"Dev sistemas",
        foco:"Habilidades de programação"
    },

    certificados: [
        {
            link: 'https://cursos.alura.com.br/user/renato-mascarenhas/course/projetos-artisticos-javascript/certificate',
            nome: 'Git e GitHub: repositório, commit e versões',
            plataforma:'Alura',
            conclusao: 'conclusão em 13 de julho de 2026',
            imagem: 'Certificado 5.jpg'
           
        },

        {
            link: 'https://cursos.alura.com.br/user/renato-mascarenhas/course/git-github-compartilhando-colaborando-projetos/certificate',
            nome: 'Git e GitHub: compartilhando e colaborando em projetos',
            plataforma:'Alura',
            conclusao: 'Conclusão em 10 de dezembro de 2025',
            imagem: 'Certificado 2.jpg'
        },
        {
            link: 'https://cursos.alura.com.br/course/javascript-listas-lacos',
            nome: 'Lógica de programação: Laços e listas com javascripit',
            plataforma:'Alura',
            conclusao: 'conclusão em 19 de novembro de 2025',
            imagem: 'Certificado 3.jpg'
        },
        {
            link: 'https://cursos.alura.com.br/user/renato-mascarenhas/course/logica-programacao-mergulhe-programacao-javascript/certificate',
            nome: 'Lógica de programação: Mergulhe em Programação com JavaScripit',
            plataforma:'Alura',
            conclusao: 'conclusão em 19 de novembro de 2025',
            imagem: 'Certificado 6.jpg'
        },
        {
            link: 'https://cursos.alura.com.br/certificate/renato-mascarenhas/html5-css3-primeiros-passos',
            nome: 'HTML5 e CSS3',
            plataforma:'Alura',
            conclusao: 'Conclusão em 19 de maio de 2026',
            imagem: 'Certificado 1.jpg'
        },
        {
            link: 'https://cursos.alura.com.br/user/renato-mascarenhas/course/projetos-artisticos-javascript/certificate',
            nome: 'Linguagem de programação: criando projetos artísticos com javascript',
            plataforma:'Alura',
            conclusao: 'conclusão em 13 de novembro de 2024',
            imagem: 'Certificado 4.jpg'
        }
    ],

       projetos:[ 
        {
        nome:"UniMind",
        subtitulo:"Saúde Mental Digital",
        url:"https://unimind-site.vercel.app/",
        descricao:"Plataforma digital dedicada à saúde mental, com dicas de bem-estar, identificação de sinais de atenção e um questionário emocional interativo para autocuidado.",
        habilidades:[
            "HTML5",
            "Vercel",
            "CSS3",
            "Saúde Mental",
        ]
    }, 

            {
        nome:"EduFlow",
        subtitulo:"Organização Escolar",
        url:"https://eduflowbr.vercel.app/",
        descricao:"Plataforma digital dedicada à organização escolar, com gerenciamento de tarefas, controle de atividades, planejamento de estudos e recursos para melhorar a produtividade dos estudantes.",
        habilidades:[
            "HTML5",
            "Vercel",
            "CSS3",
            "Educação",
        ]
    }, 
]
}

export default db