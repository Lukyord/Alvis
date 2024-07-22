import {MdDescription, MdPerson} from 'react-icons/md'

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Page data')
        .child(
          S.list()
            .title('Page data')
            .items([
              S.documentTypeListItem('blog').title('Blog').icon(MdDescription),
              S.documentTypeListItem('portfolio').title('Portfolio').icon(MdDescription),
              S.documentTypeListItem('catalogue').title('Catalogue').icon(MdDescription),
              S.documentTypeListItem('news').title('News').icon(MdDescription),
            ]),
        ),
      S.listItem()
        .title('User')
        .child(
          S.list()
            .title('User')
            .items([S.documentTypeListItem('author').title('Author').icon(MdPerson)]),
        ),
    ])
