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

const jsonSchema = require('../../../../lib/src/model/schema/json-schema');

const ISRAmetaSchema = jsonSchema.properties.ISRAmeta.properties;

const renderWelcome = () => {
  const projectOrganization = ISRAmetaSchema.projectOrganization.anyOf;
  let projectOrganizationOptions = '';
  projectOrganization.forEach((e) => {
    projectOrganizationOptions += `<option value="${e.const}">${e.title}</option>`;
  });

  const html = '<div class="details">'
  + `<p class="heading">${jsonSchema.title}</p>`
  + `<p id="details__app-version">${ISRAmetaSchema.appVersion.title}: ${ISRAmetaSchema.appVersion.default}</p>`
  + '</div>'
  + '<div id="welcome__isra-meta">'
  + `<label for="welcome__isra-meta__project-name">${ISRAmetaSchema.projectName.title}</label>`
  + '<input type="text" id="welcome__isra-meta__project-name" name="welcome__isra-meta__project-name">'
  + `<label for="welcome__isra-meta__project-version">${ISRAmetaSchema.projectVersion.title}</label>`
  + '<input type="text" id="welcome__isra-meta__project-version" name="welcome__isra-meta__project-version">'
  + `<label for="welcome__isra-meta__organization">${ISRAmetaSchema.projectOrganization.title}</label>`
  + `<select name="welcome__isra-meta__organization" id="welcome__isra-meta__organization" required title="(Mandatory) ${ISRAmetaSchema.projectOrganization.description}">`
  + `${projectOrganizationOptions}`
  + '</select>'
  + '</div>'
  + '<div id="welcome__isra-meta-tracking">'
  + `<p class="heading">${ISRAmetaSchema.ISRAtracking.title}</p>`
  + '<div class="add-delete-container">'
  + '<button class="addDelete" id="welcome__isra-meta-tracking__add">Add</button> | <button  class="addDelete" id="welcome__isra-meta-tracking__delete">Delete</button>'
  + '</div>'
  + '<div class="table">'
  + '<div class="checkbox" id="welcome__isra-meta-tracking__checkboxes"></div>'
  + '<div id="welcome__isra-meta-tracking__table"></div>'
  + '</div>'
  + '</div>'
  + '<div id="welcome__isra-meta-info">'
  + '<p class="heading">Purpose and scope</p>'
  + '</div>';

  return html;
};

module.exports = {
  renderWelcome,
};
