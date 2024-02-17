import ButtonGroups from "../button-groups/index.jsx"


export default function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap">
        <h3 className="font-bold text-2xl underline">Hoş Geldiniz</h3>
        <nav>
          <ButtonGroups
            buttons={
              [
                {
                  title:"Yeni Ekle",
                  attributes:{variant:"success",
                  onClick: () => alert("Başarıyla Eklediniz!")},
                },
                {
                  title:"Ayarlar",
                },
                {
                  title:"Çıkış Yap",
                  attributes:{variant:"danger"}
                },

              ]
            }>
          </ButtonGroups>
          {/*
          <Button variant="success">Yeni Ekle</Button>
          <Button>Ayarlar</Button>
          <Button variant="danger">Çıkış Yap</Button> */}
        </nav>

      </header>
    )
}