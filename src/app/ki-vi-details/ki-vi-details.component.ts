import { animate } from '@angular/animations';
import { Component } from '@angular/core';
import { elementAt, merge } from 'rxjs';
import { IKivistar, IcreatedJson, IfulljsonUser, Ifulljsonmanager } from './draganddrop.model';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgFor, NgIf } from '@angular/common';
import { EventManager } from '@angular/platform-browser';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
  selector: 'app-ki-vi-details',
  templateUrl: './ki-vi-details.component.html',
  styleUrls: ['./ki-vi-details.component.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag,NgIf,NgxDocViewerModule],
})
export class KiViDetailsComponent {
  doc:any = 'https://files.fm/down.php?i=axwasezb&n=SSaD.docx';
  viewer: any='google';
  selectedType: any = 'docx';
  fulljsonuser:IKivistar[]   = [
    {
      id: '8d8987ad-dec3-4dcc-aa4c-cbf2ab75821f',
      first_name: 'Sellamani S',
      last_name: null,
      phone_number: '9787722283',
      role: 'User',
      reporting_to: '8b3c0488-30c0-4896-8a0b-87e6802e235d',
      branch_code: 'KIVI009',
    },
    {
      id: '9c8db462-af99-443d-be02-a7d26c31398d',
      first_name: 'Manivel M',
      last_name: null,
      phone_number: '8940940869',
      role: 'User',
      reporting_to: '8b3c0488-30c0-4896-8a0b-87e6802e235d',
      branch_code: 'KIVI009',
    },
    {
      id: '06a9543c-6866-44d6-a48b-e92fce943942',
      first_name: 'Amar Kumar',
      last_name: 'M',
      phone_number: '8987181361',
      role: 'User',
      reporting_to: '5f270915-790f-46d4-b168-df6ed4f04160',
      branch_code: 'KIVI002',
    },
    {
      id: 'abcbf21b-f1b9-4343-a90b-6e0b71be4a85',
      first_name: 'Vinithkumar V',
      last_name: null,
      phone_number: '9566565824',
      role: 'User',
      reporting_to: '0a00000a-8e82-141c-818e-8521e2ce00f3',
      branch_code: 'KIVI010',
    },
    {
      id: 'de96a82a-7101-410e-be22-3112aeaf9412',
      first_name: 'Chandan Kumar Chaudhary',
      last_name: null,
      phone_number: '9801579310',
      role: 'User',
      reporting_to: '5f270915-790f-46d4-b168-df6ed4f04160',
      branch_code: 'KIVI002',
    },
    {
      id: '1ea2884e-1720-4760-8ab6-9a2c3720f92e',
      first_name: 'Muthukumaran',
      last_name: null,
      phone_number: '9095651398',
      role: 'User',
      reporting_to: '80083947-8292-42d6-8839-aeb0b681694b',
      branch_code: 'KIVI011',
    },
    {
      id: '095d0331-64c3-4f83-a25f-6f22cfbcb3dc',
      first_name: 'Karthik A',
      last_name: null,
      phone_number: '9750182655',
      role: 'User',
      reporting_to: 'bf8033a3-f55a-47e8-82da-94e2543ed8df',
      branch_code: 'KIVI005',
    },
    {
      id: '0a00000a-8ec6-1d48-818e-c8ba6587004b',
      first_name: 'J Ramajayam',
      last_name: null,
      phone_number: '8105266216',
      role: 'User',
      reporting_to: '0a00000a-8eee-1069-818e-ef94458e001a',
      branch_code: 'KIVI014',
    },
    {
      id: '0a00000a-8e30-16dc-818e-32da5a0500bb',
      first_name: 'Muthu M',
      last_name: null,
      phone_number: '9080083240',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32dca03f00bd',
      branch_code: 'KIVI013',
    },
    {
      id: 'ea8f85ca-495e-4529-9e65-515a068b66c5',
      first_name: 'Muthamizharasan P',
      last_name: null,
      phone_number: '8428981909',
      role: 'User',
      reporting_to: '80083947-8292-42d6-8839-aeb0b681694b',
      branch_code: 'KIVI011',
    },
    {
      id: '06458907-f4eb-45e0-96a2-fad7d7fa6bb4',
      first_name: 'Saravana Chakravarthy M',
      last_name: null,
      phone_number: '9789102122',
      role: 'User',
      reporting_to: '607d8e85-2ba4-49bd-af48-2a5f0cc01261',
      branch_code: 'KIVI006',
    },
    {
      id: '93bd1326-561e-49c5-aac9-948ebeb81a5d',
      first_name: 'Vikash Kumar Singh',
      last_name: null,
      phone_number: '8227024718',
      role: 'User',
      reporting_to: '52f9bf39-f3a8-44c9-b7b3-65220ac84da1',
      branch_code: 'KIVI003',
    },
    {
      id: '0a00000a-8e30-16dc-818e-32cb3fdd00b8',
      first_name: 'Pandiyan E',
      last_name: null,
      phone_number: '9585770301',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32ceba9100ba',
      branch_code: 'KIVI008',
    },
    {
      id: '60107580-8c90-4d8a-a2f1-150f543e873a',
      first_name: 'Vigneshwaran',
      last_name: 'E',
      phone_number: '9698963101',
      role: 'User',
      reporting_to: '329d0ded-b587-4327-9777-227b889eaa8a',
      branch_code: 'KIVI007',
    },
    {
      id: 'fa3b3d00-ced6-4f03-b82d-88bfa9bebb6c',
      first_name: 'Sivabalan',
      last_name: null,
      phone_number: '8428626190',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32ceba9100ba',
      branch_code: 'KIVI008',
    },
    {
      id: '0a00000a-8e30-16dc-818e-32c814f200b6',
      first_name: 'Madhankumar G',
      last_name: null,
      phone_number: '7845928707',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32ceba9100ba',
      branch_code: 'KIVI008',
    },
    {
      id: '0a00000a-8f9d-1902-818f-a115685d010e',
      first_name: 'Navaprakash',
      last_name: '',
      phone_number: '8098482785',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32ceba9100ba',
      branch_code: 'KIVI008',
    },
    {
      id: '75cd5ba2-3a9d-445c-b26c-a21595cfd575',
      first_name: 'Karthi I',
      last_name: null,
      phone_number: '8667508202',
      role: 'User',
      reporting_to: '80083947-8292-42d6-8839-aeb0b681694b',
      branch_code: 'KIVI011',
    },
    {
      id: '07621a6a-b49c-428a-a502-7da6e595e025',
      first_name: 'Mukesh',
      last_name: null,
      phone_number: '9345695462',
      role: 'User',
      reporting_to: '329d0ded-b587-4327-9777-227b889eaa8a',
      branch_code: 'KIVI007',
    },
    {
      id: '484137b1-0f74-4077-bfb5-8a8bf0fa29f8',
      first_name: 'Ananthan',
      last_name: null,
      phone_number: '9363280087',
      role: 'User',
      reporting_to: '607d8e85-2ba4-49bd-af48-2a5f0cc01261',
      branch_code: 'KIVI006',
    },
    {
      id: 'eb638744-6ff5-4eca-b417-c370a69907a9',
      first_name: 'Karthik K',
      last_name: null,
      phone_number: '8098889290',
      role: 'User',
      reporting_to: '607d8e85-2ba4-49bd-af48-2a5f0cc01261',
      branch_code: 'KIVI006',
    },
    {
      id: '0db07b51-a1db-407b-ae2b-dd59e54bb25f',
      first_name: 'Manivannan',
      last_name: 'V',
      phone_number: '9629814045',
      role: 'User',
      reporting_to: '329d0ded-b587-4327-9777-227b889eaa8a',
      branch_code: 'KIVI007',
    },
    {
      id: '0a00000a-8e63-1643-818e-65228924005d',
      first_name: 'Murugan',
      last_name: '',
      phone_number: '9943270713',
      role: 'User',
      reporting_to: '607d8e85-2ba4-49bd-af48-2a5f0cc01261',
      branch_code: 'KIVI006',
    },
    {
      id: '0a00000a-8e63-1643-818e-6581c829007a',
      first_name: 'Arulprakash',
      last_name: 'V',
      phone_number: '8610296995',
      role: 'User',
      reporting_to: '8b3c0488-30c0-4896-8a0b-87e6802e235d',
      branch_code: 'KIVI009',
    },
    {
      id: '0a00000a-8e4f-1c96-818e-50623e56006b',
      first_name: 'Manikandan J',
      last_name: null,
      phone_number: '7845046034',
      role: 'User',
      reporting_to: '607d8e85-2ba4-49bd-af48-2a5f0cc01261',
      branch_code: 'KIVI006',
    },
    {
      id: '0a00000a-8e63-1643-818e-651b0bdd005a',
      first_name: 'Bharathi',
      last_name: null,
      phone_number: '9345511284',
      role: 'User',
      reporting_to: '0a00000a-8e82-141c-818e-8521e2ce00f3',
      branch_code: 'KIVI010',
    },
    {
      id: 'cf35318a-5dda-40e0-8e6a-40be8234591e',
      first_name: 'Mukesh Ojha',
      last_name: null,
      phone_number: '8920923214',
      role: 'User',
      reporting_to: '52f9bf39-f3a8-44c9-b7b3-65220ac84da1',
      branch_code: 'KIVI003',
    },
    {
      id: '0a00000a-8eca-1454-818e-cb66092f0002',
      first_name: 'Hariharan K',
      last_name: null,
      phone_number: '6382794536',
      role: 'User',
      reporting_to: '0a00000a-8f27-167b-818f-2869dfc30039',
      branch_code: 'KIVI015',
    },
    {
      id: 'e29de447-535c-497f-a29e-f846399c0185',
      first_name: 'Ranjith',
      last_name: null,
      phone_number: '9360461913',
      role: 'User',
      reporting_to: '329d0ded-b587-4327-9777-227b889eaa8a',
      branch_code: 'KIVI007',
    },
    {
      id: '0a00000a-8f9d-1902-818f-a1167ff7010f',
      first_name: 'Praveen Kumar',
      last_name: '',
      phone_number: '7871815589',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32ceba9100ba',
      branch_code: 'KIVI008',
    },
    {
      id: '0a00000a-8eca-1454-818e-cb6ca2620003',
      first_name: 'Anbuselvan R',
      last_name: null,
      phone_number: '9629963393',
      role: 'User',
      reporting_to: '0a00000a-8eee-1069-818e-ef94458e001a',
      branch_code: 'KIVI014',
    },
    {
      id: '6da33219-adec-4fee-b7d9-af4a8155ea9c',
      first_name: 'Sivachandiran ',
      last_name: 'S',
      phone_number: '8682912257',
      role: 'User',
      reporting_to: 'bf8033a3-f55a-47e8-82da-94e2543ed8df',
      branch_code: 'KIVI005',
    },
    {
      id: '0a00000a-8e4f-1c96-818e-505fc0800069',
      first_name: 'Karthik Kumar',
      last_name: null,
      phone_number: '9361497874',
      role: 'User',
      reporting_to: '80083947-8292-42d6-8839-aeb0b681694b',
      branch_code: 'KIVI011',
    },
    {
      id: 'ae7ff38d-a558-45eb-a1d2-bfe2d5849a87',
      first_name: 'Jayprakash Mishra',
      last_name: null,
      phone_number: '6204851446',
      role: 'User',
      reporting_to: '52f9bf39-f3a8-44c9-b7b3-65220ac84da1',
      branch_code: 'KIVI003',
    },
    {
      id: 'd54154ba-039c-aa7a-6959-efd01a43e916',
      first_name: 'Kanjamalai Textile WPC',
      last_name: null,
      phone_number: '9245844983',
      role: 'User',
      reporting_to: null,
      branch_code: 'KIVI006',
    },
    {
      id: 'a82cebf0-aba9-4cbe-b8c6-8fd77586da2e',
      first_name: 'Veeramuthu',
      last_name: 'K',
      phone_number: '9080399020',
      role: 'User',
      reporting_to: 'bf8033a3-f55a-47e8-82da-94e2543ed8df',
      branch_code: 'KIVI005',
    },
    {
      id: '0a00000a-8e4f-1c96-818e-5064d841006c',
      first_name: 'Premkumar M',
      last_name: null,
      phone_number: '9787218113',
      role: 'User',
      reporting_to: '8b3c0488-30c0-4896-8a0b-87e6802e235d',
      branch_code: 'KIVI009',
    },
    {
      id: 'fb1a6ff2-4174-422b-b890-6cb7dd89ff1b',
      first_name: 'Manish Mishra',
      last_name: null,
      phone_number: '9525526364',
      role: 'User',
      reporting_to: '52f9bf39-f3a8-44c9-b7b3-65220ac84da1',
      branch_code: 'KIVI003',
    },
    {
      id: '06217a61-9797-44d0-865e-cf05b8cd66d6',
      first_name: 'Sathish',
      last_name: 'M',
      phone_number: '8870827609',
      role: 'User',
      reporting_to: 'bf8033a3-f55a-47e8-82da-94e2543ed8df',
      branch_code: 'KIVI005',
    },
    {
      id: '0a00000a-8ec6-1d48-818e-c8c3c236004e',
      first_name: 'Mowleeswaran E',
      last_name: null,
      phone_number: '9003821220',
      role: 'User',
      reporting_to: '0a00000a-8f27-167b-818f-2869dfc30039',
      branch_code: 'KIVI015',
    },
    {
      id: '0a00000a-8e63-1643-818e-657e42dc0078',
      first_name: 'Santhanabalakrishnan',
      last_name: 'S',
      phone_number: '8838274813',
      role: 'User',
      reporting_to: '607d8e85-2ba4-49bd-af48-2a5f0cc01261',
      branch_code: 'KIVI006',
    },
    {
      id: '0a00000a-8e4f-1c96-818e-50032a200038',
      first_name: 'Loganathan E',
      last_name: null,
      phone_number: '7824956860',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32ceba9100ba',
      branch_code: 'KIVI008',
    },
    {
      id: '0a00000a-8ee9-1a39-818e-ec2834a8009f',
      first_name: 'Venkatesh K',
      last_name: null,
      phone_number: '6382143296',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32dca03f00bd',
      branch_code: 'KIVI013',
    },
    {
      id: '0a00000a-8ec6-1d48-818e-c8c22d2f004d',
      first_name: 'Gobinath',
      last_name: null,
      phone_number: '8072527783',
      role: 'User',
      reporting_to: '8b3c0488-30c0-4896-8a0b-87e6802e235d',
      branch_code: 'KIVI009',
    },
    {
      id: '0a00000a-8ec6-1d48-818e-c8bc7df2004c',
      first_name: 'Vinoth',
      last_name: null,
      phone_number: '8015087225',
      role: 'User',
      reporting_to: '0a00000a-8eee-1069-818e-ef94458e001a',
      branch_code: 'KIVI014',
    },
    {
      id: '0a00000a-8f27-167b-818f-285c7e410030',
      first_name: 'Rajasekar',
      last_name: null,
      phone_number: '8973325171',
      role: 'User',
      reporting_to: '0a00000a-8e30-16dc-818e-32ceba9100ba',
      branch_code: 'KIVI008',
    },
    {
      id: '0a00000a-8f08-1009-818f-0bbcef0e0089',
      first_name: 'Mugilarasan M',
      last_name: null,
      phone_number: '9629129879',
      role: 'User',
      reporting_to: '607d8e85-2ba4-49bd-af48-2a5f0cc01261',
      branch_code: 'KIVI006',
    },
    {
      id: '0a00000a-8f19-106a-818f-1a5586640037',
      first_name: 'Sarathkumar',
      last_name: null,
      phone_number: '9585673950',
      role: 'User',
      reporting_to: '857fdf7c-d78f-4f05-beb1-54cb181bf821',
      branch_code: 'KIVI005',
    },
    {
      id: '0a00000a-8f0d-168f-818f-0e64f3460023',
      first_name: 'Saiprasath',
      last_name: null,
      phone_number: '7708431782',
      role: 'User',
      reporting_to: 'bf8033a3-f55a-47e8-82da-94e2543ed8df',
      branch_code: 'KIVI005',
    },
    {
      id: 'd69019ac-f840-4f21-b6a7-41367e8d7b68',
      first_name: 'Sakthivel R',
      last_name: null,
      phone_number: '9626948718',
      role: 'User',
      reporting_to: '8b3c0488-30c0-4896-8a0b-87e6802e235d',
      branch_code: 'KIVI009',
    },
    {
      id: '0a00000a-8f4b-1320-818f-4c335f4a0034',
      first_name: 'Silambarasan',
      last_name: null,
      phone_number: '8778977587',
      role: 'User',
      reporting_to: '0a00000a-8e82-141c-818e-8521e2ce00f3',
      branch_code: 'KIVI010',
    },
    {
      id: '0a00000a-8f27-167b-818f-285b3b5b002f',
      first_name: 'Vengatasalam E  ',
      last_name: null,
      phone_number: '9047673703',
      role: 'User',
      reporting_to: '329d0ded-b587-4327-9777-227b889eaa8a',
      branch_code: 'KIVI007',
    },
    {
      id: '0a00000a-8f9d-1902-818f-a11c13120110',
      first_name: 'Manikandan M',
      last_name: '',
      phone_number: '7418888747',
      role: 'User',
      reporting_to: '0a00000a-8e82-141c-818e-8521e2ce00f3',
      branch_code: 'KIVI010',
    },
    {
      id: '0a00000a-8f9d-1902-818f-a11f01130111',
      first_name: 'Sudhakar',
      last_name: '',
      phone_number: '9080953370',
      role: 'User',
      reporting_to: '80083947-8292-42d6-8839-aeb0b681694b',
      branch_code: 'KIVI011',
    },
    {
      id: '0a00000a-8f08-1009-818f-0bb6672d0087',
      first_name: 'Sakthivel ',
      last_name: null,
      phone_number: '6383234727',
      role: 'User',
      reporting_to: '0a00000a-8f27-167b-818f-2869dfc30039',
      branch_code: 'KIVI015',
    },
    {
      id: '0a00000a-8f08-1009-818f-0bbaf22f0088',
      first_name: 'Karthicraja M',
      last_name: null,
      phone_number: '9791639925',
      role: 'User',
      reporting_to: '3ec5d3b2-c58e-4768-97d7-4af9fc319330',
      branch_code: 'KIVI012',
    },
    {
      id: '0a00000a-8f4b-1320-818f-4c317a730031',
      first_name: 'Nataraj K',
      last_name: null,
      phone_number: '9786096536',
      role: 'User',
      reporting_to: '0a00000a-8e82-141c-818e-8521e2ce00f3',
      branch_code: 'KIVI010',
    },
  ];
  fulljsonManager:IKivistar[] = [
    {
      id: '5f270915-790f-46d4-b168-df6ed4f04160',
      first_name: 'Sanny Suman',
      last_name: null,
      phone_number: '7488561488',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI002',
    },
    {
      id: '3ec5d3b2-c58e-4768-97d7-4af9fc319330',
      first_name: 'Saravanan P',
      last_name: null,
      phone_number: '9865126174',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI012',
    },
    {
      id: '607d8e85-2ba4-49bd-af48-2a5f0cc01261',
      first_name: 'Venkatesh',
      last_name: null,
      phone_number: '9600996931',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI006',
    },
    {
      id: '0a00000a-8e30-16dc-818e-32ceba9100ba',
      first_name: 'Chinnadurai V',
      last_name: null,
      phone_number: '8148565781',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI008',
    },
    {
      id: '857fdf7c-d78f-4f05-beb1-54cb181bf821',
      first_name: 'Jaganathan',
      last_name: null,
      phone_number: '9655448071',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI005',
    },
    {
      id: '80083947-8292-42d6-8839-aeb0b681694b',
      first_name: 'Meivel S',
      last_name: null,
      phone_number: '9600323522',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI011',
    },
    {
      id: '8b3c0488-30c0-4896-8a0b-87e6802e235d',
      first_name: 'Rajinikumar P',
      last_name: null,
      phone_number: '9791281485',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI009',
    },
    {
      id: '0a00000a-8e82-141c-818e-8521e2ce00f3',
      first_name: 'V Vasudevan',
      last_name: null,
      phone_number: '8870649594',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI010',
    },
    {
      id: '329d0ded-b587-4327-9777-227b889eaa8a',
      first_name: 'Manohar',
      last_name: 'M',
      phone_number: '8870503868',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI007',
    },
    {
      id: 'f6a16ff7-4a31-11eb-be7b-8344edc8f36c',
      first_name: 'Thirupathi',
      last_name: null,
      phone_number: '8682821272',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI012',
    },
    {
      id: '0a00000a-8e30-16dc-818e-32dca03f00bd',
      first_name: 'Govindaraj P',
      last_name: null,
      phone_number: '9902012874',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI013',
    },
    {
      id: '0a00000a-8eee-1069-818e-ef94458e001a',
      first_name: 'R Azhagumalai',
      last_name: null,
      phone_number: '8220387341',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI014',
    },
    {
      id: '52f9bf39-f3a8-44c9-b7b3-65220ac84da1',
      first_name: 'Sandeep Kumar Gupta',
      last_name: null,
      phone_number: '8521140680',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI003',
    },
    {
      id: '0a00000a-8f27-167b-818f-2869dfc30039',
      first_name: 'P Gobinathan',
      last_name: null,
      phone_number: '9025670993',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI015',
    },
    {
      id: 'bf8033a3-f55a-47e8-82da-94e2543ed8df',
      first_name: 'Iyyanar',
      last_name: null,
      phone_number: '9843117353',
      role: 'Manager',
      reporting_to: null,
      branch_code: 'KIVI005',
    },
  ];
  frmjson!: Ifulljsonmanager
  frmArr: Ifulljsonmanager[] = [];
  branchCode: string[] = [];
  branchCodeManager: string[] = [];
  filteredBranchCode: string[] = [];
  filteredBranchCodeManager: string[] = [];
  kivistarArr: IfulljsonUser[] = [];
  createdJson: IcreatedJson={};
  ngOnInit() {
    // Kivistar BranchCode
    console.log(this.fulljsonuser);
    this.fulljsonuser.forEach((element) => {
      this.branchCode.push(element.branch_code);
    });
    console.log(this.branchCode);
    this.filteredBranchCode = this.branchCode.filter(
      (element: string, index: number) =>
        this.branchCode.indexOf(element) === index
    );
    console.log('kivistar filtered Array', this.filteredBranchCode);
    // FRM BranchCode
    console.log('FRM raw json', this.fulljsonManager);
    this.fulljsonManager.forEach((element) => {
      this.branchCodeManager.push(element.branch_code);
    });
    console.log(this.branchCodeManager);
    this.filteredBranchCodeManager = this.branchCodeManager.filter(
      (element: string, index: number) =>
        this.branchCodeManager.indexOf(element) === index
    );
    console.log('frm filetered Array', this.filteredBranchCodeManager);
    let tempUser:IfulljsonUser
    this.fulljsonuser.forEach((ele) => {
      tempUser = {
        id: ele.id,
        name: ele.first_name,
        reportingTo: ele.reporting_to,
        branch: ele.branch_code,
      };
      this.kivistarArr.push(tempUser);
    });
    console.log(this.kivistarArr);
    // FRM second column
    this.fulljsonManager.forEach((element) => {
     
      this.frmjson = {
        id: element.id,
        name: element.first_name,
        branchCode: element.branch_code,
        kivistars: [],
      };
      this.frmArr.push(this.frmjson);
    });
    console.log(this.frmArr);

    // creating newArray
    this.frmArr.map((ele1) => {
      this.kivistarArr.map((ele2) => {
        if (ele1.id === ele2.reportingTo) {
          ele1.kivistars?.push(ele2);
        }
      });
    });
    console.log(this.frmArr);

    this.filteredBranchCodeManager.forEach((branch) => {
      this.frmArr.forEach((frms) => {
        if (
          branch === frms.branchCode &&
          this.createdJson[branch] !== undefined
        ) {
          console.log(this.createdJson[branch]);
          this.createdJson[branch] = [...this.createdJson[branch], frms];
        } else if (branch === frms.branchCode) {
          this.createdJson[branch] = [frms];
        }
      });
    });
    console.log(this.createdJson);    
  }

  drop(event: CdkDragDrop<any[] | undefined>, element: Ifulljsonmanager) {
    let foundEle;
    if (event.previousContainer == event.container && event?.container?.data !== undefined) {
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
      }
    else {
      if(event.previousContainer !== event.container && event?.previousContainer?.data && event?.container?.data){
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);

      foundEle = event.container.data.find((moved) => {
        return moved.reportingTo !== element.id;
      });
      if (foundEle) {
        foundEle.reportingTo = element.id;
      }
      }
      console.log(this.createdJson)
  }}
}
