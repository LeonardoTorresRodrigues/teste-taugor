'use client'

import React, { useState } from 'react';
import { TextField, MenuItem, Avatar, Stack, Grid, Paper } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ProfilePictureButton from '../ProfilePictureButton';

const sexo = [
  {
    value: 'masculino',
    label: 'Masculino'
  },
  {
    value: 'feminino',
    label: 'Feminino'
  },
  {
    value: 'outro',
    label: 'Outro'
  }
];

export default function Form() {
  const [phone, setPhone] = React.useState('');

  const handleChange = (newPhone: string) => {
    setPhone(newPhone)
  };

  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setProfilePicture(file);
  };

  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <form noValidate autoComplete='off'>
            <TextField
              label="Nome"
              helperText="ex. Tiago"
              defaultValue=""
              fullWidth
              required
              variant='filled'
            />
            <TextField
              fullWidth
              required
              defaultValue=""
              label="Sobrenome"
              helperText="ex. Souza"
              variant='filled'
            />
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={"auto"}
            flexWrap={'wrap'} sx={{

            }}>
              <TextField
                label="Sexo"
                required
                select
                defaultValue=""
                helperText="Selecione o sexo do funcionário"
                variant='filled'
                size='medium'
              >
                {sexo.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                  label="Data de nascimento"
                  helperText="01-01-2000"
                  format='DD-MM-YYYY'
                  size='medium'
                  variant='filled'
                  required
                />
              </LocalizationProvider>
            </Stack>
            <TextField
              required
              fullWidth
              label="Endereço"
              defaultValue=""
              helperText="ex. Avenida Paulista, 1.234 - São Paulo - SP - 07010 001"
              variant='filled'
            />
            <Stack direction="row" spacing={'auto'} flexWrap={'wrap'}>
              <MuiTelInput
                defaultCountry='BR'
                value={phone}
                onChange={handleChange}
                required
                label="Telefone"
                helperText="(xx) xxxxxxxxx"
                size='small'
                variant='filled'
              />
              {profilePicture && (
                <Avatar
                  alt='Foto de Perfil'
                  src={URL.createObjectURL(profilePicture)}
                  className='MuiAvatar-root'
                  sx={{
                    width: { xs: 70, sm: 120 },
                    height: { xs: 70, sm: 120 },
                  }}
                  variant='rounded'
                />
              )}
              <ProfilePictureButton onUpload={handleUpload} />
            </Stack>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};