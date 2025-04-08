interface InfoItem {
  label: string;
  value: string;
  fullWidth?: boolean;
}

export const personalInfo: InfoItem[] = [
  { label: 'NOME', value: 'Pedro Lucas Almeida Cunha' },
  { label: 'DATA DE NASCIMENTO', value: 'DD/MM/AAAA' }
];

export const mainInfo: InfoItem[] = [
  { label: 'INSTITUIÇÃO', value: 'Nome da Instituição' },
  { label: 'TURMA', value: '1º A', fullWidth: true },
  { label: 'RA', value: 'XXX-XXX', fullWidth: true }
];

export const documents: InfoItem[] = [
  { label: 'CPF', value: 'XXX-XXX-XXX-XX', fullWidth: true },
  { label: 'RG', value: 'XX.XXX.XXX-X', fullWidth: true }
]; 