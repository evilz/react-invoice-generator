import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}

export const initialInvoice: Invoice = {
  logo: '',
  logoWidth: 100,
  title: 'FACTURE',
  companyName: '',
  name: '',
  companyAddress: '',
  companyAddress2: '',
  companyCountry: 'FRANCE',
  billTo: 'Client:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'FRANCE',
  invoiceTitleLabel: 'Facture#',
  invoiceTitle: '',
  invoiceDateLabel: 'Date de Facture',
  invoiceDate: '',
  invoiceDueDateLabel: "Date d'échéance",
  invoiceDueDate: '',
  productLineDescription: 'Description',
  productLineQuantity: 'm²/m³/Qté',
  productLineQuantityRate: 'Prix unitaire hors taxe',
  productLineQuantityAmount: 'Montant',
  productLines: [
    {
      description: 'Brochure Design',
      quantity: '2',
      rate: '100.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sous Total',
  taxLabel: 'T.V.A (10%)',
  totalLabel: 'TOTAL TTC',
  currency: '$',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
  footer: 'SIRET: XXX XXX XXX XXXXX - autre'
}
