import gql from 'graphql-tag';

export const GetQuery1 = gql`
query get_head($status: String!,$type: String) {
  tblheader(where: {status: {_eq:$status}, type: {_eq:$type}}) {
    headid
    type
    name
    status
    created_at
    code
    usr
    denno
  }
}`;
export const UpdateStatus = gql`
mutation update_status($headid: Int!,$now: timestamptz!) {
  update_tblheader(where: {headid: {_eq: $headid}},
                   _set: {status: "EDIT", updated_at: $now}) {
    affected_rows
  }
}`;
export const GetQuery2 = gql`
query get_stock($headid: Int!) {
  tblstock(where: {headid: {_eq: $headid}}) {
    gcode
    gname
    categ
    stock
    price1
    price2
    price3
    price4
    price5
  }
}`;

export const GetQuery3 = gql`
query get_custom($scode: String!) {
  tblcustomer(where: {scode: {_eq: $scode}}) {
    mcode
    name
    tkbn
    zkbn
  }
}`;
