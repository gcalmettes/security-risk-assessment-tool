/*----------------------------------------------------------------------------
*
*     Copyright © 2022 THALES. All Rights Reserved.
 *
* -----------------------------------------------------------------------------
* THALES MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
* THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THALES SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING,
 * MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
*
* THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
* CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
* PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
* NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
* SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
* SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
* PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). THALES
* SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
* HIGH RISK ACTIVITIES.
* -----------------------------------------------------------------------------
*/
/* global $ */

const projectDescription = (value) => {
  window.parent.tinymce.get('project-description_text').setContent(value);
};

const projectURL = (value) => {
  $('#project-description__url__insert').val(value);
};

const projectObjectives = (value) => {
  window.parent.tinymce.get('project-objectives_text').setContent(value);
};

const officerObjectives = (value) => {
  window.parent.tinymce.get('officer-objectives_text').setContent(value);
};

const assumptions = (value) => {
  window.parent.tinymce.get('assumptions_text').setContent(value);
};

const updateProjectContextFields = (fetchedData) => {
  projectDescription(fetchedData.projectDescription);
  projectURL(fetchedData.projectURL);
  projectObjectives(fetchedData.securityProjectObjectives);
  officerObjectives(fetchedData.securityOfficerObjectives);
  assumptions(fetchedData.securityAssumptions);
};

window.project.load(async (event, data) => {
  updateProjectContextFields(await JSON.parse(data).ProjectContext);
});

// console.log(window.parent.tinymce.get('project-description-text').getContent());
