#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcCdkProjectStack } from '../lib/vpc-cdk-project-stack';
import { EC2Stack } from '../lib/ec2-stack';
import { RDSStack } from '../lib/rds-stack';



const app = new cdk.App();
const vpcStack = new VpcCdkProjectStack(app, 'VpcCdkProjectStack', {
  
});

new EC2Stack(app, 'EC2Stack', {
  vpc: vpcStack.vpc
})

new RDSStack(app, 'RDSStack',{ //This tells cdk deploy these stacks using the vpc from the vpc stack
  vpc: vpcStack.vpc
});

app.synth()